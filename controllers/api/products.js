const Product = require("../../models/product");
const Order = require("../../models/order");

module.exports = {
  allProducts,
  product,
  orderByDate,
  //   cart,
  addToCart,
  checkout,
  allUserOrders,
  //   history,
  //   cancelTrip,
  //   updateTrip,
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
  const allOrders = await Order.find({ user: req.user._id });
  res.json(allOrders);
}
// A cart is the unpaid order for a user
// async function cart(req, res) {
//   const cart = await TripOrder.getCart(req.user._id);
//   res.json(cart);
// }

// Add a class to the cart
async function addToCart(req, res) {
  // pass all the info we need for order in req.body
  const { data, product } = req.body;
  const cart = await Order.getCart(req.user._id);
  await cart.addClassToCart(data, product);
  // console.log("controller", cart);
  res.json(cart);
}

// // PUT route function to update existing order
// async function updateTrip(req, res) {
//   // console.log('in the controller')
//   const { id, room, checkIn, checkOut, people } = req.body;
//   console.log("req.body of new hotel room", req.body);
//   const currentTripOrder = await TripOrder.findByIdAndUpdate(id, {
//     checkIn: req.body.checkIn,
//     checkOut: req.body.checkOut,
//     roomName: req.body.room.room_name,
//     price: req.body.room.price_breakdown.gross_price,
//     totalPrice: req.body.room.price_breakdown.all_inclusive_price,
//     numberOfPeople: req.body.people,
//   });
//   console.log("triporder.findbyid: ", currentTripOrder);
// }

// // Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  // console.log("controller", cart);
  res.json(cart);
}

// // Return the logged in user's paid order history
// async function history(req, res) {
//   // Sort most recent orders first
//   const tripOrders = await TripOrder.find({ user: req.user._id, isPaid: true })
//     .sort("-updatedAt")
//     .exec();
//   res.json(tripOrders);
// }

// // Delete a trip from the order history

// // Delete a trip from the order history
// async function cancelTrip(req, res) {
//   console.log("delete hotel id:", req.params.id);
//   await TripOrder.findByIdAndRemove({ _id: req.params.id });
//   // const trip = await TripOrder.find({_id: req.params.id})
//   // console.log('trip:', trip)
// }
