const BASE_URL = "http://localhost:5000";

// ===========================
// GET Request
// ===========================
async function getData(endpoint) {

    try {

        const response = await fetch(BASE_URL + endpoint);

        return await response.json();

    } catch (error) {

        console.error(error);

        return {
            success: false,
            message: "Server Error"
        };

    }

}

// ===========================
// POST Request
// ===========================
async function postData(endpoint, body) {

    try {

        const response = await fetch(BASE_URL + endpoint, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(body)

        });

        return await response.json();

    } catch (error) {

        console.error(error);

        return {

            success: false,
            message: "Server Error"

        };

    }

}

// ===========================
// Protected GET
// ===========================
async function getProtected(endpoint) {

    try {

        const token = localStorage.getItem("token");

        const response = await fetch(BASE_URL + endpoint, {

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

        return await response.json();

    } catch (error) {

        console.error(error);

        return {

            success: false,
            message: "Server Error"

        };

    }

}

// ===========================
// Protected POST
// ===========================
async function postProtected(endpoint, body) {

    try {

        const token = localStorage.getItem("token");

        const response = await fetch(BASE_URL + endpoint, {

            method: "POST",

            headers: {

                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`

            },

            body: JSON.stringify(body)

        });

        return await response.json();

    } catch (error) {

        console.error(error);

        return {

            success: false,
            message: "Server Error"

        };

    }

}