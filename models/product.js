const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const hotelSchema = require("./hotel");

const productSchema = new Schema(
  {
    name: { type: String },
    photo: { type: String },
    description:{ type: String},
    price: { type: Number },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

module.exports = mongoose.model("Product", productSchema);