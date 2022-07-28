// Set the region for AWS
AWS.config.update({ region: "us-east-1" });
// // Create S3 service object
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

/////////////////////////////////////////////////////////////
// setup multer middleware to parse form-data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, req.session.userId + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage, limits: { fieldSize: 5000 } });

const readFile = async (file, urlArr) => {
  try {
    const fileResult = await fs.readFile("uploads/" + file);

    // Buffer Pattern; how to handle buffers; straw, intake/outtake analogy
    const base64data = new Buffer(fileResult, "binary");
    try {
      const result = await s3
        .upload({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file,
          Body: base64data,
        })
        .promise();
      console.log(`File upload to S3 successfully at ${result.Location}`);
      urlArr.push(result.Location);
    } catch (e) {
      console.log("Error uploading file to S3", err);
    }
  } catch (e) {
    console.log("Error reading temp files", e);
  }
};

const removeFile = async (file) => {
  await fs.rm("uploads/" + file);
};
/////////////////////////////////////////////////////////////////////////////////////////////

// post new ryokan using AWS
// router.post("/new", upload.array("photos"), async (req, res) => {
//   try {
//     // reg ex to match
//     const re = `${req.session.userId}`;
//     const regex = new RegExp(re);
//     const photoUrls = [];

//     const allFiles = await fs.readdir("uploads/");

//     const matches = allFiles.filter((filePath) => {
//       return filePath.match(regex);
//     });

//     const numFiles = matches.length;
//     if (numFiles) {
//       // Read in the file, convert it to base64, store to S3
//       for (i = 0; i < numFiles; i++) {
//         await readFile(matches[i], photoUrls);
//       }

//       for (i = 0; i < numFiles; i++) {
//         await removeFile(matches[i]);
//       }
//     }
//     console.log(photoUrls);

//     const newRyokan = new Ryokan(req.body);
//     newRyokan.img = photoUrls;
//     await newRyokan.save();

//     // redirect user to index page if successfully created item
//     res.redirect("/ryokans");
//   } catch (error) {
//     console.log("Error loading temp folder");
//     res.json({ error });
//   }
// });
