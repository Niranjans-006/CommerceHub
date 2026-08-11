// ==============================
// LOGIN
// ==============================

async function handleLogin(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const result = await postData("/auth/login", {
        email,
        password
    });

    if (result.success) {

        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));

        alert("Login Successful");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } else {

        alert(result.message);

    }

}

// ==============================
// REGISTER
// ==============================

async function handleRegister(event) {

    event.preventDefault();

    const full_name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        alert("Passwords do not match");
        return;

    }

    const result = await postData("/auth/signup", {

        full_name,
        email,
        password,
        phone: "",
        address: ""

    });

    if (result.success) {

        alert("Registration Successful");

        document.querySelector('[data-tab="login"]').click();

    } else {

        alert(result.message);

    }

}