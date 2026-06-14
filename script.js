const SERVER_URL = "https://jwtauth-17tj.onrender.com";
// const SERVER_URL = "http://localhost:8080";

/* ================= REGISTER ================= */

async function register() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    try {

        const response = await fetch(
            `${SERVER_URL}/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        const message = await response.text();

        if (response.ok) {

            alert("Registration Successful");

            window.location.href = "login.html";

        } else {

            alert(message);
        }

    } catch (error) {

        console.error(error);

        alert("Server Error");
    }
}

/* ================= LOGIN ================= */

async function login() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    try {

        const response = await fetch(
            `${SERVER_URL}/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        if (response.ok) {

            const data = await response.json();

            localStorage.setItem(
                "token",
                data.token
            );

            alert("Login Successful");

            window.location.href = "todo.html";

        } else {

            const errorMessage =
                await response.text();

            alert(errorMessage);
        }

    } catch (error) {

        console.error(error);

        alert("Server Error");
    }
}

/* ================= LOGOUT ================= */

function logout() {

    localStorage.removeItem("token");

    window.location.href = "login.html";
}

/* ================= TODOS ================= */

function loadTodos() {

    const token =
        localStorage.getItem("token");

    if (!token) {

        window.location.href = "login.html";

        return;
    }

    const todoList =
        document.getElementById("todo-list");

    todoList.innerHTML = "";

    const welcomeCard =
        document.createElement("div");

    welcomeCard.className = "todo-card";

    welcomeCard.innerHTML = `
        <span>JWT Login Successful</span>
    `;

    todoList.appendChild(welcomeCard);
}

function addTodo() {

    const input =
        document.getElementById("new-todo");

    const value =
        input.value.trim();

    if (!value) {
        return;
    }

    const todoList =
        document.getElementById("todo-list");

    const card =
        document.createElement("div");

    card.className = "todo-card";

    card.innerHTML = `
        <span>${value}</span>
        <button onclick="deleteTodo(this)">
            Delete
        </button>
    `;

    todoList.appendChild(card);

    input.value = "";
}

function deleteTodo(button) {

    button.parentElement.remove();
}

/* ================= PAGE LOAD ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            document.getElementById("todo-list")
        ) {

            loadTodos();
        }
    }
);