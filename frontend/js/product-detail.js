const API_URL = "http://localhost:5000";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

document.addEventListener("DOMContentLoaded", () => {
    loadProduct();
});

// ================================
// Load Product
// ================================

async function loadProduct() {

    try {

        const response = await fetch(`${API_URL}/products`);

        const data = await response.json();

        // Supports both:
        // res.json(result)
        // res.json({products: result})
        const products = data.products || data;

        const product = products.find(p => p.id == productId);

        if (!product) {

            document.getElementById("product-detail-content").innerHTML = `
                <h2 style="text-align:center">
                    Product Not Found
                </h2>
            `;

            return;

        }

        document.getElementById("breadcrumb-product").innerText =
            product.product_name;

        document.getElementById("product-detail-content").innerHTML = `

        <div class="product-detail-grid">

            <div class="product-detail-image">

                <img
                    src="image/${product.image}"
                    alt="${product.product_name}">

            </div>

            <div class="product-detail-info">

                <h1>${product.product_name}</h1>

                <h2>₹${product.price}</h2>

                <p>${product.description}</p>

                <button
                    class="btn btn-primary"
                    onclick="addToCart(${product.id})">

                    Add To Cart

                </button>

                <button
                    class="btn btn-outline"
                    onclick="addToWishlist(${product.id})">

                    Wishlist

                </button>

            </div>

        </div>

        `;

        loadRelatedProducts(products, product.id);

    }

    catch (err) {

        console.log(err);

        document.getElementById("product-detail-content").innerHTML = `
            <h2 style="text-align:center">
                Failed To Load Product
            </h2>
        `;

    }

}

// ================================
// Related Products
// ================================

function loadRelatedProducts(products, currentId) {

    const list = document.getElementById("related-products-list");

    if (!list) return;

    list.innerHTML = "";

    products
        .filter(product => product.id != currentId)
        .slice(0, 4)
        .forEach(product => {

            list.innerHTML += `

            <li class="glide__slide">

                <a href="product-detail.html?id=${product.id}">

                    <img
                        src="image/${product.image}"
                        style="width:100%;height:220px;object-fit:cover;border-radius:10px;">

                    <h4>${product.product_name}</h4>

                    <p style="color:#ff3c20;font-weight:bold;">
                        ₹${product.price}
                    </p>

                </a>

            </li>

            `;

        });

    new Glide(".product-carousel3", {

        type: "carousel",

        perView: 4,

        gap: 20,

        breakpoints: {

            992: {

                perView: 2

            },

            576: {

                perView: 1

            }

        }

    }).mount();

}

// ================================
// Add To Cart
// ================================

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

        console.log(err);

        alert("Server Error");

    }

}

// ================================
// Add To Wishlist
// ================================

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

        console.log(err);

        alert("Server Error");

    }

}