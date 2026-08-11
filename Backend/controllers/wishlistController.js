const db = require("../config/db");

// ===========================
// Add To Wishlist
// ===========================
exports.addToWishlist = (req, res) => {

    const { user_id, product_id } = req.body;

    const sql = `
        INSERT INTO wishlist(user_id, product_id)
        VALUES (?, ?)
    `;

    db.query(sql, [user_id, product_id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.status(201).json({
            success: true,
            message: "Product Added To Wishlist"
        });

    });

};


// ===========================
// Get Wishlist
// ===========================
exports.getWishlist = (req, res) => {

    const sql = `
        SELECT
            wishlist.id,
            products.product_name,
            products.price,
            products.image
        FROM wishlist
        JOIN products
        ON wishlist.product_id = products.id
    `;

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.json({
            success: true,
            wishlist: result
        });

    });

};


// ===========================
// Delete Wishlist Item
// ===========================
exports.deleteWishlist = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM wishlist WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.json({
            success: true,
            message: "Wishlist Item Removed"
        });

    });

};