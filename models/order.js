const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const hotelSchema = require("./hotel");

const orderSchema = new Schema(
  {
    // An order belongs to a user
    user: { type: Schema.Types.ObjectId, ref: "User" },
    phone: { type: Number },
    // A user's unpaid order is their "cart"
    productId: { type: Schema.Types.ObjectId, ref: "Product" },
    productName: { type: String, required: true },
    productPhoto: { type: String },
    isPaid: { type: Boolean, default: false },
    startDate: { type: String, required: true },
    classTime: { type: String, required: true },
    price: { type: Number },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

orderSchema.virtual("orderId").get(function () {
  return this.id.slice(-4).toUpperCase();
});

orderSchema.statics.getCart = function (userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    // update
    { user: userId },
    // upsert option will create the doc if
    // it doesn't exist
    { upsert: true, new: true }
  );
};

orderSchema.methods.addClassToCart = async function (data, product) {
  // cart = this means the tripSchema
  const currentOrder = this;
  console.log("oder model", data);

  currentOrder.productId = product.id;
  currentOrder.productName = product.name;
  currentOrder.productPhoto = product.photo;
  currentOrder.startDate = data.startDate;
  currentOrder.classTime = data.classTime;
  currentOrder.price = product.price;
  return currentOrder.save();
};

orderSchema.methods.updateTrip = function (id, room, checkIn, checkOut) {
  const currentTrip = this;
  return console.log("in the model. currentTrip:", currentTrip);
};

module.exports = mongoose.model("Order", orderSchema);
