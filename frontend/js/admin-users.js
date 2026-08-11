const API_URL = "http://localhost:5000/auth/users";

const userTable = document.getElementById("userTable");

const searchInput = document.getElementById("searchInput");

let users = [];

// ==============================
// Load Users
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    loadUsers();

});

// ==============================
// Get Users
// ==============================

async function loadUsers() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        users = data.users || [];

        displayUsers(users);

    }

    catch (err) {

        console.log(err);

        Swal.fire(

            "Error",

            "Unable to load users",

            "error"

        );

    }

}

// ==============================
// Display Users
// ==============================

function displayUsers(list) {

    userTable.innerHTML = "";

    if (list.length === 0) {

        userTable.innerHTML = `

        <tr>

            <td colspan="7"
            style="text-align:center;padding:35px;">

                No Users Found

            </td>

        </tr>

        `;

        return;

    }

    list.forEach(user => {

        const firstLetter = user.full_name
            ? user.full_name.charAt(0).toUpperCase()
            : "U";

        const roleClass =
            user.role === "ADMIN"
                ? "role-admin"
                : "role-user";

        userTable.innerHTML += `

        <tr>

            <td>

                <div class="user-avatar">

                    ${firstLetter}

                </div>

            </td>

            <td>

                <b>${user.full_name}</b>

            </td>

            <td>

                ${user.email}

            </td>

            <td>

                ${user.phone || "-"}

            </td>

            <td>

                <span class="${roleClass}">

                    ${user.role}

                </span>

            </td>

            <td>

                ${new Date(user.created_at)
                    .toLocaleDateString()}

            </td>

            <td>

                <button

                class="deleteBtn"

                onclick="deleteUser(${user.id})">

                    <i class="bi bi-trash"></i>

                </button>

            </td>

        </tr>

        `;

    });

}

// ==============================
// Search Users
// ==============================

searchInput.addEventListener("keyup", () => {

    const keyword = searchInput.value
        .toLowerCase();

    const filtered = users.filter(user =>

        user.full_name
            .toLowerCase()
            .includes(keyword)

        ||

        user.email
            .toLowerCase()
            .includes(keyword)

    );

    displayUsers(filtered);

});

// ==============================
// Delete User
// ==============================

async function deleteUser(id) {

    const confirmDelete = await Swal.fire({

        title: "Delete User?",

        text: "This user will be removed permanently.",

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

        const response = await fetch(`${API_URL}/${id}`, {

            method: "DELETE"

        });

        const data = await response.json();

        Swal.fire(

            "Deleted!",

            data.message,

            "success"

        );

        loadUsers();

    }

    catch (err) {

        console.log(err);

        Swal.fire(

            "Error",

            "Unable to delete user",

            "error"

        );

    }

}

// ==============================
// Refresh Users
// ==============================

function refreshUsers() {

    loadUsers();

}

// ==============================
// Auto Refresh
// ==============================

setInterval(() => {

    refreshUsers();

}, 30000);

// ==============================
// Prevent Delete Yourself
// ==============================

const currentUser = JSON.parse(

    localStorage.getItem("user")

);

async function deleteUser(id) {

    if (

        currentUser &&

        currentUser.id == id

    ) {

        Swal.fire(

            "Not Allowed",

            "You cannot delete your own admin account.",

            "warning"

        );

        return;

    }

    const confirmDelete = await Swal.fire({

        title: "Delete User?",

        text: "This action cannot be undone!",

        icon: "warning",

        showCancelButton: true,

        confirmButtonColor: "#ef4444",

        confirmButtonText: "Delete"

    });

    if (!confirmDelete.isConfirmed) return;

    try {

        const response = await fetch(

            `${API_URL}/${id}`,

            {

                method: "DELETE"

            }

        );

        const data = await response.json();

        Swal.fire(

            "Deleted",

            data.message,

            "success"

        );

        loadUsers();

    }

    catch (err) {

        console.log(err);

    }

}