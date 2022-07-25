const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const hotelSchema = require("./hotel");

const orderSchema = new Schema(
  {
    // An order belongs to a user
    user: { type: Schema.Types.ObjectId, ref: "User" },
    phone: { type: Number },
    // A user's unpaid order is their "cart"
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    isPaid: { type: Boolean, default: false },
    startDate: { type: Date, required: true },
    classTime: { type: String },
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

orderSchema.methods.addHotelToCart = async function (
  phone,
  hotel,
  room,
  checkIn,
  checkOut,
  hotel_id,
  hotelPhoto
) {
  // cart = this means the tripSchema
  const currentOrder = this;

  currentOrder.checkIn = checkIn;
  currentOrder.checkOut = checkOut;
  currentOrder.numberOfPeople = room.nr_adults;
  currentOrder.hotelName = hotel.name;
  currentOrder.hotelId = hotel_id;
  currentOrder.hotelPhoto = hotelPhoto;
  currentOrder.price =
    room.product_price_breakdown.gross_amount_per_night.value;
  currentOrder.totalPrice = room.price_breakdown.gross_price;
  currentOrder.roomName = room.name;
  currentOrder.rating = hotel.review_score;
  // currentOrder.hotelPhoto = room.name;
  currentOrder.address = `${hotel.address},${hotel.city}, ${hotel.zip}`;

  return currentOrder.save();
};

orderSchema.methods.updateTrip = function (id, room, checkIn, checkOut) {
  const currentTrip = this;
  return console.log("in the model. currentTrip:", currentTrip);
};

module.exports = mongoose.model("Order", orderSchema);
