const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/products");

// GET /api/tripOrders/cart
router.get("/", productsCtrl.allProducts);
// GET /api/tripOrders/history
router.get("/:id", productsCtrl.product);
router.get("/orders/:date", productsCtrl.orderByDate);
// POST /api/tripOrders/cart/items/:id
router.post("/cart/new", productsCtrl.addToCart);
// POST /api/tripOrders/cart/checkout
// router.post("/cart/checkout", productsCtrl.checkout);
// // DELETE /api/tripOrders/history/update/:id
// router.put("/history/update/:id", productsCtrl.updateOrder)
// // DELETE /api/tripOrders/history/:id
// router.delete("/history/:id", productsCtrl.cancelOrder)

module.exports = router;
