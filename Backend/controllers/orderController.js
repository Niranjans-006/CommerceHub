const db = require("../config/db");

// ===========================
// Place Order
// ===========================

exports.placeOrder = (req, res) => {

    const { user_id, total_amount } = req.body;

    const sql = `
        INSERT INTO orders(user_id,total_amount)
        VALUES(?,?)
    `;

    db.query(sql, [user_id, total_amount], (err) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });

        }

        res.status(201).json({

            success: true,
            message: "Order Placed Successfully"

        });

    });

};

// ===========================
// Get Orders By User
// ===========================

exports.getOrders = (req, res) => {

    const userId = req.params.userId;

    const sql = `
        SELECT
            id,
            total_amount,
            status,
            order_date
        FROM orders
        WHERE user_id=?
        ORDER BY order_date DESC
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
            orders: result

        });

    });

};

// ===========================
// Get All Orders (Admin)
// ===========================

exports.getAllOrders = (req, res) => {

    const sql = `
    SELECT

        orders.id,

        users.full_name,

        users.email,

        orders.total_amount,

        orders.status,

        orders.order_date

    FROM orders

    JOIN users

    ON orders.user_id = users.id

    ORDER BY orders.order_date DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {

            return res.status(500).json({

                success: false,
                message: "Database Error"

            });

        }

        res.json({

            success: true,
            orders: result

        });

    });

};

// ===========================
// Update Order Status
// ===========================

exports.updateOrder = (req, res) => {

    const id = req.params.id;

    const { status } = req.body;

    const sql = `
    UPDATE orders
    SET status=?
    WHERE id=?
    `;

    db.query(sql, [status, id], (err) => {

        if (err) {

            return res.status(500).json({

                success: false,
                message: "Database Error"

            });

        }

        res.json({

            success: true,
            message: "Order Updated Successfully"

        });

    });

};

// ===========================
// Delete Order
// ===========================

exports.deleteOrder = (req, res) => {

    const id = req.params.id;

    db.query(

        "DELETE FROM orders WHERE id=?",

        [id],

        (err) => {

            if (err) {

                return res.status(500).json({

                    success: false,
                    message: "Database Error"

                });

            }

            res.json({

                success: true,
                message: "Order Deleted Successfully"

            });

        }

    );

};