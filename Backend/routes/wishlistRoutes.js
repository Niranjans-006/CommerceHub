const express = require("express");

const router = express.Router();

const wishlistController = require("../controllers/wishlistController");

// Add Wishlist
router.post("/add", wishlistController.addToWishlist);

// Get Wishlist
router.get("/", wishlistController.getWishlist);

// Delete Wishlist
router.delete("/:id", wishlistController.deleteWishlist);

module.exports = router;