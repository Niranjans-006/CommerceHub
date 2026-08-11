const API_URL = "http://localhost:5000/orders";

const orderTable = document.getElementById("orderTable");

const searchInput = document.getElementById("searchInput");

let orders = [];

// ==============================
// Load Orders
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    loadOrders();

});

// ==============================
// Get Orders
// ==============================

async function loadOrders() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        orders = data.orders || [];

        displayOrders(orders);

    }

    catch (err) {

        console.log(err);

        Swal.fire(

            "Error",

            "Unable to load orders",

            "error"

        );

    }

}

// ==============================
// Display Orders
// ==============================

function displayOrders(list) {

    orderTable.innerHTML = "";

    if (list.length === 0) {

        orderTable.innerHTML = `

        <tr>

            <td colspan="7"

            style="text-align:center;padding:35px;">

                No Orders Found

            </td>

        </tr>

        `;

        return;

    }

    list.forEach(order => {

        orderTable.innerHTML += `

        <tr>

            <td>

                #${order.id}

            </td>

            <td>

                ${order.full_name}

            </td>

            <td>

                ${order.email}

            </td>

            <td>

                ₹${order.total_amount}

            </td>

            <td>

                <select

                class="status ${order.status.toLowerCase()}"

                onchange="updateStatus(${order.id},this.value)">

                    <option value="Pending"

                    ${order.status=="Pending"?"selected":""}>

                    Pending

                    </option>

                    <option value="Processing"

                    ${order.status=="Processing"?"selected":""}>

                    Processing

                    </option>

                    <option value="Shipped"

                    ${order.status=="Shipped"?"selected":""}>

                    Shipped

                    </option>

                    <option value="Delivered"

                    ${order.status=="Delivered"?"selected":""}>

                    Delivered

                    </option>

                    <option value="Cancelled"

                    ${order.status=="Cancelled"?"selected":""}>

                    Cancelled

                    </option>

                </select>

            </td>

            <td>

                ${new Date(order.order_date)

                .toLocaleDateString()}

            </td>

            <td>

                <button

                class="delete"

                onclick="deleteOrder(${order.id})">

                    <i class="bi bi-trash"></i>

                </button>

            </td>

        </tr>

        `;

    });

}

// ==============================
// Update Order Status
// ==============================

async function updateStatus(id, status) {

    try {

        const response = await fetch(

            `${API_URL}/${id}`,

            {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    status: status

                })

            }

        );

        const data = await response.json();

        Swal.fire({

            icon: "success",

            title: "Updated",

            text: data.message,

            timer: 1200,

            showConfirmButton: false

        });

        loadOrders();

    }

    catch (err) {

        console.log(err);

        Swal.fire(

            "Error",

            "Unable to update order",

            "error"

        );

    }

}

// ==============================
// Search Orders
// ==============================

searchInput.addEventListener("keyup", () => {

    const keyword = searchInput.value

        .toLowerCase()

        .trim();

    const filtered = orders.filter(order =>

        order.full_name.toLowerCase().includes(keyword)

        ||

        order.email.toLowerCase().includes(keyword)

        ||

        order.status.toLowerCase().includes(keyword)

        ||

        order.id.toString().includes(keyword)

    );

    displayOrders(filtered);

});

// ==============================
// Auto Refresh
// ==============================

setInterval(() => {

    loadOrders();

}, 30000);
// ==============================
// Delete Order
// ==============================

async function deleteOrder(id) {

    const confirmDelete = await Swal.fire({

        title: "Delete Order?",

        text: "This order will be permanently deleted.",

        icon: "warning",

        showCancelButton: true,

        confirmButtonColor: "#ef4444",

        cancelButtonColor: "#6b7280",

        confirmButtonText: "Delete"

    });

    if (!confirmDelete.isConfirmed) {

        return;

    }

    try {

        const response = await fetch(

            `${API_URL}/${id}`,

            {

                method: "DELETE"

            }

        );

        const data = await response.json();

        Swal.fire({

            icon: "success",

            title: "Deleted",

            text: data.message,

            timer: 1200,

            showConfirmButton: false

        });

        loadOrders();

    }

    catch (err) {

        console.log(err);

        Swal.fire(

            "Error",

            "Unable to delete order",

            "error"

        );

    }

}

// ==============================
// Logout
// ==============================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        Swal.fire({

            title: "Logout?",

            text: "Do you want to logout?",

            icon: "question",

            showCancelButton: true,

            confirmButtonText: "Logout"

        }).then(result => {

            if (result.isConfirmed) {

                localStorage.removeItem("token");

                localStorage.removeItem("user");

                window.location.href = "admin-login.html";

            }

        });

    });

}

// ==============================
// Change Status Color
// ==============================

document.addEventListener("change", (e) => {

    if (e.target.classList.contains("status")) {

        e.target.className = "status";

        e.target.classList.add(

            e.target.value.toLowerCase()

        );

    }

});

// ==============================
// Refresh
// ==============================

function refreshOrders() {

    loadOrders();

}

window.addEventListener("focus", refreshOrders);

// ==============================
// Finished
// ==============================

console.log("✅ Admin Orders Loaded Successfully");