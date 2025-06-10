
# 🧾 SmartHire Careers – Online Job Portal (Backend)

A backend service for an Online Job Portal, built with **Node.js**, **Express.js**, and **MySQL**. It supports user authentication, job management, feedback collection, and role-based authorization.

---

## ✅ Purpose

This application provides the backend functionality for an online job portal, including:

- User registration and login with JWT-based authentication  
- Role-based access (Admin, Employer, etc.)  
- Job posting, editing, and deletion  
- User feedback submission and viewing  
- Data persistence via MySQL

---

## 📁 Project Structure

```
backend/
├── app.js               # Main Express app entry point
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Auto-generated lockfile
├── middleware/
│   └── user.js          # JWT verification middleware
├── routes/
│   ├── authRoutes.js    # Routes for signup, signin, logout
│   ├── jobRoutes.js     # Routes for job CRUD operations
│   ├── feedbackRoutes.js# Routes for feedback handling
│   └── userRoutes.js    # Routes for user management
└── src/
    └── config/
        └── dbconfig.js  # MySQL connection configuration
```

---

## 🧱 Architecture & Technologies

### 📦 Tech Stack

| Layer              | Technology                            |
|--------------------|----------------------------------------|
| Language           | JavaScript (ES Module Syntax)          |
| Framework          | Express.js (v5.x)                      |
| Database           | MySQL (via `mysql2`)                   |
| Authentication     | JWT (`jsonwebtoken`)                   |
| Password Hashing   | `bcrypt`                               |
| HTTP Codes         | `http-status-codes` package            |
| Middleware         | `cookie-parser`, `cors`                |
| Config Management  | Manual (`dotenv` present but unused)   |
| Security Practices | JWT-based Auth + Role Authorization    |

---

## 📂 Key Files

### `app.js`
- Entry point of the backend app.
- Sets up:
  - JSON body parser
  - CORS (for localhost origins)
  - Cookie parsing
  - Routes: `/authRoutes`, `/jobRoutes`, `/feedbackRoutes`
  - DB initialization
  - Server listening on port `7800`

### `dbconfig.js`
- Establishes connection to MySQL using hardcoded credentials:
```js
host: "localhost",
user: "root",
password: "cdac",
database: "cdac_wpt"
```

### `middleware/user.js`
- `verifyToken(req, res, next)`
  - Verifies JWT from `Authorization` header
  - Appends user data to the request
  - Used to protect restricted routes

---

## 📘 API Endpoints

### 🔑 Auth
| Method | Endpoint  | Description        |
|--------|-----------|--------------------|
| POST   | `/signup` | Register user      |
| POST   | `/signin` | Login user         |
| GET    | `/logout` | Logout user        |

### 👤 Users
| Method | Endpoint    | Description                   |
|--------|-------------|-------------------------------|
| GET    | `/allUsers` | Paginated list of users       |
| GET    | `/user/:id` | Retrieve user by ID (JWT)     |
| PUT    | `/user/:id` | Update user (Admin only)      |
| DELETE | `/user/:id` | Delete user (Admin only)      |

### 💼 Jobs
| Method | Endpoint          | Description                       |
|--------|-------------------|-----------------------------------|
| POST   | `/job-post`       | Post job (Admin/Employer only)    |
| GET    | `/job-get`        | Retrieve all jobs                 |
| GET    | `/job-get1`       | Duplicate job retrieval route     |
| PUT    | `/job-edit/:id`   | Edit job (Admin/Employer only)    |
| DELETE | `/job-delete/:id` | Delete job (Admin/Employer only)  |

### 💬 Feedback
| Method | Endpoint         | Description                     |
|--------|------------------|---------------------------------|
| POST   | `/feedback-post` | Submit feedback (Public)        |
| GET    | `/feedback-get`  | View feedback (Admin only)      |

---

## 🗄️ Database Tables

### `usertable`
| Column    | Type                              |
|-----------|-----------------------------------|
| id        | INT                               |
| firstname | VARCHAR(30)                       |
| lastname  | VARCHAR(30)                       |
| email     | VARCHAR(100), UNIQUE              |
| password  | VARCHAR(100) (hashed)             |
| role      | tinyint(1) (0=employer, 1=admin)  |

### `job_data`
| Column  | Type          |
|---------|---------------|
| id      | INT           |
| role    | VARCHAR(50)   |
| skills  | VARCHAR(500)  |
| details | VARCHAR(1000) |

### `feedback`
| Column    | Type         |
|-----------|--------------|
| firstname | VARCHAR(30)  |
| lastname  | VARCHAR(30)  |
| email     | VARCHAR(100) |
| rating    | TINYINT      |
| comments  | TEXT         |
