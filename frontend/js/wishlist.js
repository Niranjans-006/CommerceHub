const API_URL = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", () => {
    loadWishlist();
});

// =============================
// Load Wishlist
// =============================

async function loadWishlist() {

    try {

        const response = await fetch(`${API_URL}/wishlist`);

        const data = await response.json();

        displayWishlist(data.wishlist);

    } catch (err) {

        console.error(err);

        alert("Unable to load wishlist");

    }

}

// =============================
// Display Wishlist
// =============================

function displayWishlist(products) {

    const wishlistContainer = document.getElementById("wishlistItems");

    if (!wishlistContainer) return;

    wishlistContainer.innerHTML = "";

    if (products.length === 0) {

        wishlistContainer.innerHTML = `

        <div class="empty-wishlist">

            <h2>Your Wishlist is Empty ❤️</h2>

            <br>

            <a href="shop.html" class="btn btn-primary">

                Continue Shopping

            </a>

        </div>

        `;

        return;

    }

    products.forEach(product => {

        wishlistContainer.innerHTML += `

        <div class="wishlist-item">

            <div class="wishlist-item-image">

                <img
                    src="image/${product.image}"
                    alt="${product.product_name}">

            </div>

            <div class="wishlist-item-details">

                <h3>${product.product_name}</h3>

                <p>₹${product.price}</p>

                <div class="wishlist-item-actions">

                    <button
                        class="add-cart-btn"
                        onclick="moveToCart(${product.product_id})">

                        Add To Cart

                    </button>

                    <button
                        class="remove-btn"
                        onclick="removeWishlist(${product.id})">

                        Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

// =============================
// Remove Wishlist
// =============================

async function removeWishlist(id) {

    if (!confirm("Remove this item?")) return;

    try {

        const response = await fetch(`${API_URL}/wishlist/${id}`, {

            method: "DELETE"

        });

        const data = await response.json();

        alert(data.message);

        loadWishlist();

    } catch (err) {

        console.error(err);

    }

}

// =============================
// Move To Cart
// =============================

function moveToCart(productId) {

    addToCart(productId);

}