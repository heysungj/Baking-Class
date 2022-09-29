const AWS = require("aws-sdk");
const fs = require("fs/promises");
// import sendgrid html template from utility folder
const sendGrid = require("../../src/utilities/sendGrid");

const Product = require("../../models/product");
const Order = require("../../models/order");
const User = require("../../models/user");

// Set the region for AWS
AWS.config.update({ region: "us-east-1" });
// // Create S3 service object
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// // for sendgrid mail
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

module.exports = {
  allProducts,
  product,
  orderByDate,
  //   cart,
  addToCart,
  checkout,
  allUserOrders,
  cancelOrder,
  allOrders,
  addClass,
  updateClass,
  deleteClass,
};

// Find all products
async function allProducts(req, res) {
  const allProducts = await Product.find();
  res.json(allProducts);
}

//   Find porduct
async function product(req, res) {
  const product = await Product.findById(req.params.id);
  res.json(product);
}

//   Find orders by date
async function orderByDate(req, res) {
  const orders = await Order.find({ startDate: req.params.date });
  console.log("controllerOrders", orders);
  res.json(orders);
}

// Find all orders from a user
async function allUserOrders(req, res) {
  const allOrders = await Order.find({ user: req.user._id, isPaid: true })
    .sort("-startDate")
    .exec();
  res.json(allOrders);
}

// Find all orders
async function allOrders(req, res) {
  const allOrders = await Order.find();
  res.json(allOrders);
}

// Add a class to the cart
async function addToCart(req, res) {
  // pass all the info we need for order in req.body
  const { data, product } = req.body;
  const cart = await Order.getCart(req.user._id);
  await cart.addClassToCart(data, product);
  // console.log("controller", cart);
  res.json(cart);
}

// Add new class to database
async function addClass(req, res) {
  try {
    // reg ex to match
    const re = `${req.user._id.toString()}`;
    const regex = new RegExp(re);
    const photoUrls = [];

    const allFiles = await fs.readdir("uploads/");
    // find all files including same user id
    const matches = allFiles.filter((filePath) => {
      return filePath.match(regex);
    });

    const numFiles = matches.length;
    if (numFiles) {
      // Read in the file, convert it to base64, store to S3
      for (let i = 0; i < numFiles; i++) {
        await readFile(matches[i], photoUrls);
      }

      for (let i = 0; i < numFiles; i++) {
        await removeFile(matches[i]);
      }
    }
    // create new product
    let addedClass = new Product(req.body);
    addedClass.photo = photoUrls[0];
    await addedClass.save();
    return res.json(addedClass);
  } catch (error) {
    console.log("Error loading temp folder");
    res.json({ error });
  }
}

// update existing class
async function updateClass(req, res) {
  try {
    // reg ex to match
    const re = `${req.user._id.toString()}`;
    const regex = new RegExp(re);
    const photoUrls = [];

    const allFiles = await fs.readdir("uploads/");

    const matches = allFiles.filter((filePath) => {
      return filePath.match(regex);
    });

    const numFiles = matches.length;
    if (numFiles) {
      // Read in the file, convert it to base64, store to S3
      for (let i = 0; i < numFiles; i++) {
        await readFile(matches[i], photoUrls);
      }

      for (let i = 0; i < numFiles; i++) {
        await removeFile(matches[i]);
      }
    }

    const editedClass = req.body;
    const updatedClass = await Product.findByIdAndUpdate(req.params.productId, {
      name: editedClass.name,
      description: editedClass.description,
      photo: numFiles > 0 ? photoUrls[0] : editedClass.photo,
      price: editedClass.price,
    });
    return res.json(updatedClass);
  } catch (error) {
    console.log("Error loading temp folder");
    res.json({ error });
  }
}

// // Delete a class from database
async function deleteClass(req, res) {
  const deletedProduct = await Product.findByIdAndRemove(req.params.productId);
  res.json(deletedProduct);
}

// // Update the cart's isPaid property to true
// send email confirmation
async function checkout(req, res) {
  const user = await User.findById(req.user._id);
  // console.log("checkout user", user);
  const cart = await Order.getCart(req.user._id);
  // console.log("cart photo", cart.productPhoto);
  cart.isPaid = true;
  let htmlTemplate = sendGrid(
    user.name,
    cart.orderId,
    cart.startDate,
    cart.classTime,
    cart.productPhoto,
    cart.productName,
    cart.price
  );
  const msg = {
    to: user.email,
    from: "bakingclasstest@gmail.com",
    subject: `Order Confirmation ${cart.orderId}`,
    content: [{ type: "text/html", value: htmlTemplate }],
  };
  sgMail.send(msg);
  await cart.save();

  // console.log("controller", cart);
  res.json(cart);
}

// // Delete an order from the order history
async function cancelOrder(req, res) {
  console.log("delete order id:", req.params.orderId);
  const canceledOrder = await Order.findByIdAndRemove(req.params.orderId);
  res.json(canceledOrder);
}

// aws setting up

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
      console.log("Error uploading file to S3", e);
    }
  } catch (e) {
    console.log("Error reading temp files", e);
  }
};

const removeFile = async (file) => {
  await fs.rm("uploads/" + file);
};
