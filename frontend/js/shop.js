const API_URL = "http://localhost:5000";

// ==============================
// Load Products
// ==============================

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});

async function loadProducts() {

    try {

        const response = await fetch(`${API_URL}/products`);

        const data = await response.json();

        const products = data.products || data;

        displayProducts(products);

    } catch (err) {

        console.error(err);

        alert("Unable to load products.");

    }

}

// ==============================
// Display Products
// ==============================
function displayProducts(products) {

    const shopGrid = document.getElementById("shopGrid");

    shopGrid.innerHTML = "";

    products.forEach(product => {

        shopGrid.innerHTML += `

        <div class="product-item">

            <button
                class="wishlist-icon"
                onclick="addToWishlist(${product.id})">

                <i class="bi bi-heart"></i>

            </button>

            <div class="product-image">

                <a href="product-detail.html?id=${product.id}">

                    <img
                        src="image/${product.image}"
                        alt="${product.product_name}">

                </a>

            </div>

            <div class="product-info">

                <h3 class="product-title">

                    <a
                        href="product-detail.html?id=${product.id}"
                        style="text-decoration:none;color:inherit;">

                        ${product.product_name}

                    </a>

                </h3>

                <p>${product.description}</p>

                <div class="product-prices">

                    <strong>₹${product.price}</strong>

                </div>

                <button
                    class="btn btn-primary btn-block"
                    onclick="addToCart(${product.id})">

                    Add To Cart

                </button>

            </div>

        </div>

        `;

    });

}

// ==============================
// Add To Cart
// ==============================

async function addToCart(productId) {

    const token = localStorage.getItem("token");

    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user) {

        alert("Please Login First");

        window.location.href = "login.html";

        return;

    }

    try {

        const response = await fetch(`${API_URL}/cart/add`, {

            method: "POST",

            headers: {

                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`

            },

            body: JSON.stringify({

                user_id: user.id,
                product_id: productId,
                quantity: 1

            })

        });

        const data = await response.json();

        alert(data.message);

    }

    catch (err) {

        console.error(err);

        alert("Server Error");

    }

}

// ==============================
// Add To Wishlist
// ==============================

async function addToWishlist(productId) {

    const token = localStorage.getItem("token");

    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user) {

        alert("Please Login First");

        window.location.href = "login.html";

        return;

    }

    try {

        const response = await fetch(`${API_URL}/wishlist/add`, {

            method: "POST",

            headers: {

                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`

            },

            body: JSON.stringify({

                user_id: user.id,
                product_id: productId

            })

        });

        const data = await response.json();

        alert(data.message);

    }

    catch (err) {

        console.error(err);

        alert("Server Error");

    }

}