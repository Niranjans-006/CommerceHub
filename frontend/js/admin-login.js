const API_URL = "http://localhost:5000";

document
.getElementById("adminLoginForm")
.addEventListener("submit", loginAdmin);

async function loginAdmin(e){

    e.preventDefault();

    const email=document.getElementById("email").value;

    const password=document.getElementById("password").value;

    try{

        const response=await fetch(`${API_URL}/auth/login`,{

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                email,
                password

            })

        });

        const data=await response.json();

        if(!data.success){

            alert(data.message);

            return;

        }

        if(data.user.role!=="ADMIN"){

            alert("Access Denied");

            return;

        }

        localStorage.setItem("token",data.token);

        localStorage.setItem("user",JSON.stringify(data.user));

        alert("Welcome Admin");

        window.location.href="admin-dashboard.html";

    }

    catch(err){

        console.log(err);

        alert("Server Error");

    }

}