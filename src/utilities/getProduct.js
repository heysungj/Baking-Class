require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

const Product = require("../../models/product");

async function getProductNameById(id) {
  const product = await Product.findById(id);
  return product.name;
}

module.exports = getProductNameById;
