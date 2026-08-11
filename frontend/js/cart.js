const API_URL = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", () => {
    loadCart();
});

async function loadCart() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {

        alert("Please Login");

        window.location.href = "login.html";

        return;

    }

    try {

        const response = await fetch(`${API_URL}/cart/${user.id}`);

        const data = await response.json();

        if (data.success) {

            displayCart(data.cart);

        }

    } catch (err) {

        console.log(err);

    }

}

function displayCart(cart) {

    const cartItems = document.getElementById("cartItems");

    const subtotal = document.getElementById("subtotal");

    const total = document.getElementById("total");

    cartItems.innerHTML = "";

    let grandTotal = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<h3>Your Cart is Empty</h3>";

        subtotal.innerHTML = "₹0";

        total.innerHTML = "₹0";

        return;

    }

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        grandTotal += itemTotal;

        cartItems.innerHTML += `

<div class="cart-item">

<div class="cart-item-image">

<img src="image/${item.image}" alt="${item.product_name}">

</div>

<div class="cart-item-details">

<h4>${item.product_name}</h4>

<p class="price">₹${item.price}</p>

<p>Quantity : ${item.quantity}</p>

<button onclick="removeCart(${item.id})">

Remove

</button>

</div>

<div class="cart-item-total">

₹${itemTotal}

</div>

</div>

`;

    });

    subtotal.innerHTML = `₹${grandTotal}`;

    total.innerHTML = `₹${grandTotal}`;

}

async function removeCart(id) {

    if (!confirm("Remove this item?")) return;

    await fetch(`${API_URL}/cart/delete/${id}`, {

        method: "DELETE"

    });

    loadCart();

}