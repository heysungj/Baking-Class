const Product = require("../../models/product");
const Order = require("../../models/order");
const User = require("../../models/user");
// for aws to save photos
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// for sendgrid mail
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
  const allOrders = await Order.find({ user: req.user._id })
    .sort("-startDate")
    .exec();
  res.json(allOrders);
}

// Find all orders
async function allOrders(req, res) {
  const allOrders = await Order.find();
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

// Add new class to database
async function addClass(req, res) {
  const { newClass } = req.body;
  let addedClass = new Product(newClass);
  addedClass.save();
  res.json(addedClass);
}

// // Delete a trip from the order history
async function updateClass(req, res) {
  const { editedClass } = req.body;
  const updatedClass = await Product.findByIdAndUpdate(req.params.productId, {
    name: editedClass.name,
    description: editedClass.description,
    photo: editedClass.photo,
    price: editedClass.price,
  });
  res.json(updatedClass);
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
  cart.isPaid = true;
  const msg = {
    to: user.email,
    from: "bakingclasstest@gmail.com",
    subject: `Order Confirmation ${cart.orderId}`,
    text: `You have booked ${cart.productName} class on ${cart.startDate} at ${cart.classTime}`,
  };
  sgMail.send(msg);
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
async function cancelOrder(req, res) {
  console.log("delete order id:", req.params.orderId);
  const canceledOrder = await Order.findByIdAndRemove(req.params.orderId);
  res.json(canceledOrder);
}
