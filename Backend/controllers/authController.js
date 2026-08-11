const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");


// =====================
// SIGNUP CONTROLLER
// =====================
exports.signup = async (req, res) => {

    const { full_name, email, password, phone, address } = req.body;

    try {

        const checkSql = "SELECT * FROM users WHERE email=?";

        db.query(checkSql, [email], async (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });
            }

            if (result.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: "Email Already Exists"
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const sql = `
            INSERT INTO users
            (full_name,email,password,phone,address)
            VALUES(?,?,?,?,?)
            `;

            db.query(
                sql,
                [full_name, email, hashedPassword, phone, address],
                (err) => {

                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message: "Database Error"
                        });
                    }

                    res.status(201).json({
                        success: true,
                        message: "User Registered Successfully"
                    });

                }
            );

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};


// =====================
// LOGIN CONTROLLER
// =====================
exports.login = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email=?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        const user = result[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {

            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });

        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({

            success: true,
            message: "Login Successful",

            token,

            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                role: user.role
            }

        });

    });

};


// ==============================
// Get All Users
// ==============================

exports.getAllUsers = (req, res) => {

    const sql = `
    SELECT
        id,
        full_name,
        email,
        phone,
        role,
        created_at
    FROM users
    ORDER BY id DESC
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

            users: result

        });

    });

};

// ==============================
// Delete User
// ==============================

exports.deleteUser = (req, res) => {

    const id = req.params.id;

    db.query(

        "DELETE FROM users WHERE id=?",

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

                message: "User Deleted Successfully"

            });

        }

    );

};