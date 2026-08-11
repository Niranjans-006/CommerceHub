const db = require("../config/db");

// ==============================
// Get All Products
// ==============================

exports.getAllProducts = (req, res) => {

    db.query("SELECT * FROM products", (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });

        }

        res.json({
            success: true,
            products: result
        });

    });

};

// ==============================
// Get Product By Id
// ==============================

exports.getProductById = (req, res) => {

    const id = req.params.id;

    db.query(
        "SELECT * FROM products WHERE id=?",
        [id],
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });

            }

            if (result.length === 0) {

                return res.status(404).json({
                    success: false,
                    message: "Product Not Found"
                });

            }

            res.json({
                success: true,
                product: result[0]
            });

        }
    );

};

// ==============================
// Add Product
// ==============================

exports.addProduct = (req, res) => {

    const {
        product_name,
        description,
        price,
        image
    } = req.body;

    const sql = `
    INSERT INTO products
    (product_name,description,price,image)
    VALUES(?,?,?,?)
    `;

    db.query(
        sql,
        [
            product_name,
            description,
            price,
            image
        ],
        (err) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });

            }

            res.json({
                success: true,
                message: "Product Added Successfully"
            });

        }
    );

};

// ==============================
// Update Product
// ==============================

exports.updateProduct = (req, res) => {

    const id = req.params.id;

    const {
        product_name,
        description,
        price,
        image
    } = req.body;

    const sql = `
    UPDATE products
    SET
    product_name=?,
    description=?,
    price=?,
    image=?
    WHERE id=?
    `;

    db.query(
        sql,
        [
            product_name,
            description,
            price,
            image,
            id
        ],
        (err) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });

            }

            res.json({
                success: true,
                message: "Product Updated"
            });

        }
    );

};

// ==============================
// Delete Product
// ==============================

exports.deleteProduct = (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM products WHERE id=?",
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
                message: "Product Deleted"
            });

        }
    );

};