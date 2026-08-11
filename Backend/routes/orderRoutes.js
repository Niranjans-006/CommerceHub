const express = require("express");

const router = express.Router();

const {

    placeOrder,

    getOrders,

    getAllOrders,

    updateOrder,

    deleteOrder

} = require("../controllers/orderController");

// ==============================
// Place Order
// ==============================

router.post("/place", placeOrder);

// ==============================
// Admin - Get All Orders
// ==============================

router.get("/", getAllOrders);

// ==============================
// User Orders
// Example:
// GET /orders/1
// ==============================

router.get("/:userId", getOrders);

// ==============================
// Update Order
// ==============================

router.put("/:id", updateOrder);

// ==============================
// Delete Order
// ==============================

router.delete("/:id", deleteOrder);

module.exports = router;