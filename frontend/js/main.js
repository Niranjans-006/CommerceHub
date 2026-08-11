// ================================
// CommerceHub Main JS
// ================================

// Logged in user
const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

// ================================
// Update Header
// ================================

document.addEventListener("DOMContentLoaded", () => {

    updateHeader();

    updateCounts();

});

// ================================
// Login / Logout
// ================================

function updateHeader() {

    const userBtn = document.querySelector(".user-btn");

    if (!userBtn) return;

    if (token && user) {

        userBtn.innerHTML = `
            <i class="bi bi-person-check-fill"></i>
        `;

        userBtn.href = "#";

        userBtn.onclick = () => {

            if (confirm("Logout?")) {

                localStorage.removeItem("token");
                localStorage.removeItem("user");

                location.href = "login.html";

            }

        };

    }

}

// ================================
// Cart & Wishlist Count
// ================================

function updateCounts() {

    const cartCount = document.getElementById("cart-count");

    const wishlistCount = document.getElementById("wishlist-count");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (cartCount) {

        cartCount.innerText = cart.length;

    }

    if (wishlistCount) {

        wishlistCount.innerText = wishlist.length;

    }

}