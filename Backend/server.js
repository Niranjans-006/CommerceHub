require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

// =============================
// Database Connection
// =============================
require("./config/db");

// =============================
// Import Routes
// =============================
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const orderRoutes = require("./routes/orderRoutes");

// =============================
// JWT Middleware
// =============================
const { verifyToken } = require("./middleware/authMiddleware");

const app = express();

// =============================
// Global Middleware
// =============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =============================
// Serve Frontend Files
// =============================
const frontendPath = path.join(__dirname, "../frontend");

console.log("Frontend Path:", frontendPath);

app.use(express.static(frontendPath));

// =============================
// Home Route
// =============================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// =============================
// API Routes
// =============================
app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/orders", orderRoutes);

// =============================
// Protected Profile Route
// =============================
app.get("/profile", verifyToken, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to your profile",
        user: req.user
    });
});

// =============================
// 404
// =============================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API Not Found"
    });
});

// =============================
// Start Server
// =============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("=================================");
    console.log(`🚀 Server Running : http://localhost:${PORT}`);
    console.log("=================================");
});