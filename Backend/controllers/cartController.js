const db = require("../config/db");

// ==============================
// Add Product to Cart
// ==============================
exports.addToCart = (req, res) => {

    const { user_id, product_id, quantity } = req.body;

    const sql = `
        INSERT INTO cart (user_id, product_id, quantity)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [user_id, product_id, quantity], (err) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });

        }

        res.status(201).json({
            success: true,
            message: "Product Added To Cart"
        });

    });

};

// ==============================
// View Cart
// ==============================
exports.getCart = (req, res) => {

    const userId = req.params.userId;

    const sql = `
        SELECT
            cart.id,
            cart.product_id,
            products.product_name,
            products.price,
            products.image,
            cart.quantity
        FROM cart
        JOIN products
        ON cart.product_id = products.id
        WHERE cart.user_id = ?
    `;

    db.query(sql, [userId], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });

        }

        res.json({
            success: true,
            cart: result
        });

    });

};

// ==============================
// Update Quantity
// ==============================
exports.updateCart = (req, res) => {

    const cartId = req.params.id;

    const { quantity } = req.body;

    const sql = `
        UPDATE cart
        SET quantity = ?
        WHERE id = ?
    `;

    db.query(sql, [quantity, cartId], (err) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });

        }

        res.json({
            success: true,
            message: "Cart Updated Successfully"
        });

    });

};

// ==============================
// Delete Cart Item
// ==============================
exports.deleteCart = (req, res) => {

    const cartId = req.params.id;

    const sql = `
        DELETE FROM cart
        WHERE id = ?
    `;

    db.query(sql, [cartId], (err) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });

        }

        res.json({
            success: true,
            message: "Product Removed From Cart"
        });

    });

};

// ==============================
// Clear Cart
// ==============================
exports.clearCart = (req, res) => {

    const userId = req.params.userId;

    const sql = `
        DELETE FROM cart
        WHERE user_id = ?
    `;

    db.query(sql, [userId], (err) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });

        }

        res.json({
            success: true,
            message: "Cart Cleared Successfully"
        });

    });

};