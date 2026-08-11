const API_URL = "http://localhost:5000";

// ==========================
// Elements
// ==========================

const summaryItems = document.getElementById("summaryItems");
const grandTotal = document.getElementById("grandTotal");
const placeOrderBtn = document.getElementById("placeOrderBtn");

// ==========================
// User
// ==========================

const user = JSON.parse(localStorage.getItem("user"));

let cartItems = [];
let totalAmount = 0;

// ==========================
// Page Load
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    if (!user) {

        Swal.fire({

            icon: "warning",

            title: "Login Required",

            text: "Please login first."

        }).then(() => {

            window.location.href = "login.html";

        });

        return;

    }

    loadCart();

});

// ==========================
// Load Cart
// ==========================

async function loadCart() {

    try {

        const response = await fetch(

            `${API_URL}/cart/${user.id}`

        );

        const data = await response.json();

        if (!data.success) {

            throw new Error("Unable to load cart");

        }

        cartItems = data.cart;

        displaySummary();

    }

    catch (err) {

        console.log(err);

        Swal.fire({

            icon: "error",

            title: "Error",

            text: "Unable to load cart."

        });

    }

}

// ==========================
// Display Order Summary
// ==========================

function displaySummary() {

    summaryItems.innerHTML = "";

    totalAmount = 0;

    if (cartItems.length === 0) {

        summaryItems.innerHTML = `

        <div class="summary-item">

            <span>Cart Empty</span>

            <span>₹0</span>

        </div>

        `;

        grandTotal.innerText = "₹0";

        placeOrderBtn.disabled = true;

        return;

    }

    cartItems.forEach(item => {

        const subtotal =

            Number(item.price) *

            Number(item.quantity);

        totalAmount += subtotal;

        summaryItems.innerHTML += `

        <div class="summary-item">

            <span>

                ${item.product_name}

                × ${item.quantity}

            </span>

            <span>

                ₹${subtotal}

            </span>

        </div>

        `;

    });

    grandTotal.innerText =

        "₹" + totalAmount;

}

// ==========================
// Place Order
// ==========================

placeOrderBtn.addEventListener("click", placeOrder);

async function placeOrder() {

    const fullName = document.getElementById("fullName").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const address = document.getElementById("address").value.trim();

    // ==========================
    // Validation
    // ==========================

    if (!fullName || !email || !phone || !address) {

        Swal.fire({

            icon: "warning",

            title: "Missing Details",

            text: "Please fill all customer details."

        });

        return;

    }

    if (cartItems.length === 0) {

        Swal.fire({

            icon: "warning",

            title: "Cart Empty",

            text: "Add products before placing an order."

        });

        return;

    }

    placeOrderBtn.disabled = true;

    placeOrderBtn.innerText = "Placing Order...";

    try {

        // ==========================
        // Save Order
        // ==========================

        const response = await fetch(

            `${API_URL}/orders/place`,

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    user_id: user.id,

                    total_amount: totalAmount

                })

            }

        );

        const data = await response.json();

        if (!data.success) {

            throw new Error(data.message);

        }

        // ==========================
        // Clear Cart
        // ==========================

        const clearResponse = await fetch(

            `${API_URL}/cart/clear/${user.id}`,

            {

                method: "DELETE"

            }

        );

        const clearData = await clearResponse.json();

        if (!clearData.success) {

            throw new Error(clearData.message);

        }

        // ==========================
        // Success
        // ==========================

        await Swal.fire({

            icon: "success",

            title: "Order Placed Successfully!",

            text: "Thank you for shopping with CommerceHub.",

            confirmButtonColor: "#ff5b2e"

        });

        window.location.href = "shop.html";

    }

    catch (err) {

        console.log(err);

        Swal.fire({

            icon: "error",

            title: "Order Failed",

            text: err.message

        });

    }

    finally {

        placeOrderBtn.disabled = false;

        placeOrderBtn.innerText = "Place Order";

    }

}