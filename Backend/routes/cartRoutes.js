const express = require("express");

const router = express.Router();

const {

    addToCart,

    getCart,

    updateCart,

    deleteCart,

    clearCart

} = require("../controllers/cartController");

// Add Product
router.post("/add", addToCart);

// Clear Cart
router.delete("/clear/:userId", clearCart);

router.get("/clear-test/:userId", (req, res) => {

    res.json({

        success: true,

        message: "Route Working"

    });

});

// Update Cart
router.put("/update/:id", updateCart);

// Delete Single Item
router.delete("/delete/:id", deleteCart);

// Get User Cart
router.get("/:userId", getCart);

module.exports = router;