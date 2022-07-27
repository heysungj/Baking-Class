const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/products");

// GET /api/tripOrders/cart
router.get("/", productsCtrl.allProducts);
// GET /api/tripOrders/history
router.get("/:id", productsCtrl.product);
// GET orders on a spesific date
router.get("/orders/:date", productsCtrl.orderByDate);
// GET /api/user/orders get all orders from  a user
router.get("/user/orders", productsCtrl.allUserOrders);
// GET /api/user/orders get all orders from  a user
router.get("/user/allOrders", productsCtrl.allOrders);
// DELETE /api/user/orders get all orders from  a user
router.delete("/user/orders/:orderId", productsCtrl.cancelOrder);
// POST /api/tripOrders/cart/new
router.post("/cart/new", productsCtrl.addToCart);
// POST /api/tripOrders/cart/checkout
router.post("/cart/checkout", productsCtrl.checkout);
// POST /api/tripOrders/newClass
router.post("/newClass", productsCtrl.addClass);
// // DELETE /api/tripOrders/history/update/:id
// router.put("/history/update/:id", productsCtrl.updateOrder)
// // DELETE /api/tripOrders/history/:id
// router.delete("/history/:id", productsCtrl.cancelOrder)

module.exports = router;
