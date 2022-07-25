/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const Product = require('./product')
const User = require("./user");
const mongoose = require('./connection');
const { products, initialUser } = require("./seedData");

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection;

// Make sure code is not run till connected
db.on("open", async () => {
  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////

  // Delete all user and reviews and ryokans
  console.log('run')

  await User.deleteMany({});

  await Product.deleteMany({});

  // add the starter ryokans
  await Product.create(products).then((products) => {
    // log the new fruits to confirm their creation
    console.log(products);
  });


  await User.create(initialUser).then((initialUser) => {
    // log the new fruits to confirm their creation
    console.log(initialUser);
  });

  ///////////////////////////////////////////////
  // Write your Seed Code Above
  //////////////////////////////////////////////
});
