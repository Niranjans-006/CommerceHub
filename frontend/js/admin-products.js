const API_URL = "http://localhost:5000/products";

// ==============================
// Elements
// ==============================

const productTable = document.getElementById("productTable");

const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("productModal");

const addBtn = document.getElementById("addProductBtn");

const closeBtn = document.querySelector(".close");

const productForm = document.getElementById("productForm");

let products = [];

let editId = null;

// ==============================
// Load
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    loadProducts();

});

// ==============================
// Load Products
// ==============================

async function loadProducts() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        products = data.products || [];

        displayProducts(products);

    }

    catch (err) {

        console.log(err);

        Swal.fire(

            "Error",

            "Unable to load products",

            "error"

        );

    }

}

// ==============================
// Display Products
// ==============================

function displayProducts(list) {

    productTable.innerHTML = "";

    if (list.length === 0) {

        productTable.innerHTML = `

        <tr>

            <td colspan="5"

            style="text-align:center;padding:40px;">

            No Products Found

            </td>

        </tr>

        `;

        return;

    }

    list.forEach(product => {

        productTable.innerHTML += `

        <tr>

            <td>

                <img

                src="image/${product.image}"

                class="product-img">

            </td>

            <td>

                <b>

                ${product.product_name}

                </b>

            </td>

            <td>

                <span class="price">

                ₹${product.price}

                </span>

            </td>

            <td>

                <span class="status">

                Active

                </span>

            </td>

            <td>

                <div class="action">

                    <button

                    class="edit"

                    onclick="editProduct(${product.id})">

                    <i class="bi bi-pencil"></i>

                    </button>

                    <button

                    class="delete"

                    onclick="deleteProduct(${product.id})">

                    <i class="bi bi-trash"></i>

                    </button>

                </div>

            </td>

        </tr>

        `;

    });

}

// ==============================
// Open Modal
// ==============================

addBtn.onclick = () => {

    editId = null;

    productForm.reset();

    modal.style.display = "flex";

};

// ==============================
// Close Modal
// ==============================

closeBtn.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if (e.target == modal) {

        modal.style.display = "none";

    }

};

// ==============================
// Add / Update Product
// ==============================

productForm.addEventListener("submit", saveProduct);

async function saveProduct(e) {

    e.preventDefault();

    const product = {

        product_name: document.getElementById("productName").value,

        description: document.getElementById("productDescription").value,

        price: document.getElementById("productPrice").value,

        image: document.getElementById("productImage").value

    };

    try {

        // ======================
        // Add Product
        // ======================

        if (editId === null) {

            const response = await fetch(API_URL, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(product)

            });

            const data = await response.json();

            Swal.fire(

                "Success",

                data.message,

                "success"

            );

        }

        // ======================
        // Update Product
        // ======================

        else {

            const response = await fetch(

                `${API_URL}/${editId}`,

                {

                    method: "PUT",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(product)

                }

            );

            const data = await response.json();

            Swal.fire(

                "Updated",

                data.message,

                "success"

            );

        }

        modal.style.display = "none";

        productForm.reset();

        editId = null;

        loadProducts();

    }

    catch (err) {

        console.log(err);

        Swal.fire(

            "Error",

            "Something went wrong",

            "error"

        );

    }

}

// ==============================
// Edit Product
// ==============================

async function editProduct(id) {

    try {

        const response = await fetch(`${API_URL}/${id}`);

        const data = await response.json();

        const product = data.product;

        editId = id;

        document.getElementById("productName").value =
            product.product_name;

        document.getElementById("productDescription").value =
            product.description;

        document.getElementById("productPrice").value =
            product.price;

        document.getElementById("productImage").value =
            product.image;

        modal.style.display = "flex";

    }

    catch (err) {

        console.log(err);

    }

}
// ==============================
// Delete Product
// ==============================

async function deleteProduct(id) {

    const result = await Swal.fire({

        title: "Delete Product?",

        text: "This action cannot be undone!",

        icon: "warning",

        showCancelButton: true,

        confirmButtonColor: "#ef4444",

        cancelButtonColor: "#6b7280",

        confirmButtonText: "Delete"

    });

    if (!result.isConfirmed) return;

    try {

        const response = await fetch(`${API_URL}/${id}`, {

            method: "DELETE"

        });

        const data = await response.json();

        Swal.fire(

            "Deleted!",

            data.message,

            "success"

        );

        loadProducts();

    }

    catch (err) {

        console.log(err);

        Swal.fire(

            "Error",

            "Unable to delete product",

            "error"

        );

    }

}

// ==============================
// Live Search
// ==============================

searchInput.addEventListener("keyup", () => {

    const keyword = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>

        product.product_name
            .toLowerCase()
            .includes(keyword)

    );

    displayProducts(filtered);

});

// ==============================
// ESC Key Close Modal
// ==============================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.style.display = "none";

    }

});

// ==============================
// Refresh Products
// ==============================

function refreshProducts() {

    loadProducts();

}

// ==============================
// Reset Form After Close
// ==============================

function closeProductModal() {

    modal.style.display = "none";

    productForm.reset();

    editId = null;

}

closeBtn.addEventListener("click", closeProductModal);

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        closeProductModal();

    }

});