# JWT Authentication Frontend

A simple frontend application for interacting with the JWT Authentication Backend. Users can register, log in, and access protected resources using JWT tokens.

## Features

- User Registration
- User Login
- JWT Token Storage
- Protected API Requests
- Responsive User Interface

## Tech Stack

- HTML
- CSS
- JavaScript

## Getting Started

### Clone the Repository

Download the project source code from GitHub.

```bash
git clone https://github.com/your-username/jwt-auth-frontend.git
```

### Navigate to the Project Directory

Move into the project folder.

```bash
cd jwt-auth-frontend
```

### Open the Application

If the project contains only HTML, CSS, and JavaScript files:

```bash
start index.html
```

or simply open `index.html` in your browser.

### Run with VS Code Live Server

1. Open the project in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

The application will be available at:

```text
http://127.0.0.1:5500
```

## Backend Configuration

Update the API base URL in `script.js`:

```javascript
const API_URL = "http://localhost:8080";
```

If the backend is deployed:

```javascript
const API_URL = "https://your-backend-url.onrender.com";
```

## Project Structure

```text
jwt-auth-frontend/
│
├── index.html
├── login.html
├── register.html
├── style.css
├── script.js
└── README.md
```
