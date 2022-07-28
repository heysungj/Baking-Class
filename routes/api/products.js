const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/products");

// for aws to save photos
const multer = require("multer");

// setup multer middleware to parse form-data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, req.user._id.toString() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage, limits: { fieldSize: 5000 } });

// GET /api/products
router.get("/", productsCtrl.allProducts);
// GET /api/products/:ID
router.get("/:id", productsCtrl.product);
// GET orders on a spesific date
router.get("/orders/:date", productsCtrl.orderByDate);
// GET /api/products/user/orders get all orders from  a user
router.get("/user/orders", productsCtrl.allUserOrders);
// GET /api/productsuser/orders get all orders from  a user
router.get("/user/allOrders", productsCtrl.allOrders);
// DELETE /api/products/user/orders::id delete order from a user
router.delete("/user/orders/:orderId", productsCtrl.cancelOrder);
// DELETE /api/products//deleteClass/:productId delete class from database
router.delete("/deleteClass/:productId", productsCtrl.deleteClass);
// POST //api/products/cart/new
router.post("/cart/new", productsCtrl.addToCart);
// POST /api/products/cart/checkout
router.post("/cart/checkout", productsCtrl.checkout);
// POST /api/products/newClass
router.post("/newClass", upload.array("photos"), productsCtrl.addClass);
// PUT /api/products/editClass
router.put("/editClass/:productId", productsCtrl.updateClass);

module.exports = router;
