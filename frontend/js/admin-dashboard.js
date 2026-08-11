const API = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", () => {

    loadDashboard();

});

// ==========================

async function loadDashboard() {

    try {

        // Products

        const productRes = await fetch(`${API}/products`);
        const productData = await productRes.json();

        document.getElementById("totalProducts").innerText =
            productData.products.length;

        // Users

        const userRes = await fetch(`${API}/auth/users`);
        const userData = await userRes.json();

        document.getElementById("totalUsers").innerText =
            userData.users.length;

        // Orders

        const orderRes = await fetch(`${API}/orders`);
        const orderData = await orderRes.json();

        document.getElementById("totalOrders").innerText =
            orderData.orders.length;

        // Revenue

        let revenue = 0;

        orderData.orders.forEach(order => {

            revenue += Number(order.total_amount);

        });

        document.getElementById("totalRevenue").innerText =
            "₹" + revenue.toLocaleString();

        // Recent Users

        loadRecentUsers(userData.users);

        // Recent Orders

        loadRecentOrders(orderData.orders);

        // Chart

        loadChart(orderData.orders);

    }

    catch (err) {

        console.log(err);

    }

}

// ==========================

function loadRecentUsers(users) {

    const container =
        document.getElementById("recentUsers");

    container.innerHTML = "";

    users.slice(0,5).forEach(user=>{

        container.innerHTML += `

        <div class="user">

            <img src="image/admin.png">

            <div>

                <h4>

                ${user.full_name}

                </h4>

                <span>

                ${user.email}

                </span>

            </div>

        </div>

        `;

    });

}

// ==========================

function loadRecentOrders(orders){

const table=document.getElementById("recentOrders");

table.innerHTML="";

orders.slice(0,5).forEach(order=>{

table.innerHTML+=`

<tr>

<td>

#${order.id}

</td>

<td>

${order.full_name}

</td>

<td>

₹${order.total_amount}

</td>

<td>

<span class="status ${order.status.toLowerCase()}">

${order.status}

</span>

</td>

</tr>

`;

});

}

// ==========================

function loadChart(orders){

const ctx=document.getElementById("salesChart");

new Chart(ctx,{

type:"bar",

data:{

labels:orders.map(order=>"Order "+order.id),

datasets:[{

label:"Revenue",

data:orders.map(order=>order.total_amount),

borderWidth:1

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"#fff"

}

}

},

scales:{

x:{

ticks:{color:"#fff"}

},

y:{

ticks:{color:"#fff"}

}

}

}

});

}

// ==========================

const logout=document.getElementById("logoutBtn");

logout.onclick=()=>{

localStorage.clear();

location.href="admin-login.html";

};