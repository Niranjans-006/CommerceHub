const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

// Get All Products
router.get("/", productController.getAllProducts);

// Get Single Product
router.get("/:id", productController.getProductById);

// Add Product
router.post("/", productController.addProduct);

// Update Product
router.put("/:id", productController.updateProduct);

// Delete Product
router.delete("/:id", productController.deleteProduct);

module.exports = router;