
# 🧑‍🔧 Car Service Platform – Frontend

Welcome to the frontend of the **Car Service Booking Portal**, built with **React**, **React Bootstrap**, and **Axios**. This application allows users to book car service appointments, browse workshops, and give feedback. Admins can manage workshops and view all service requests.

---

## 🚀 Features

### ✅ Authentication
- **Signup** and **Login** functionality
- JWT-based login using `localStorage`
- Authenticated routes for service requests and admin dashboard

### 🛠️ Workshop Management
- View workshops without login
- Admin can add, edit, delete workshops
- Admin can view all service requests across workshops

### 📅 Service Requests
- Users can select a workshop and book a service appointment
- Choose issue details and preferred time slot
- Admin has full visibility of all bookings

### 📋 Feedback & Contact
- Feedback form for rating and suggestions
- Contact form to reach out to the service team

---

## 🗂️ Folder Structure

```
/src
├── assets/
│   └── images/                    # Images for UI
├── components/
│   ├── Navbar.jsx                 # Top navigation bar
│   ├── Footer.jsx                 # Bottom footer
│   └── ProtectedRoute.jsx         # Authenticated route wrapper
├── pages/
│   ├── Home.jsx                   # Landing page
│   ├── About.jsx                  # About the company
│   ├── ContactUs.jsx              # Contact form
│   ├── Feedback.jsx               # Feedback form
│   ├── Services.jsx               # User booking services
│   ├── AdminDashboard.jsx         # Admin panel for workshops & requests
│   ├── Login.jsx                  # Sign in page
│   └── Signup.jsx                 # Register page
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔗 Routes

| Path             | Component         | Access         |
|------------------|-------------------|----------------|
| `/`              | Home              | Public         |
| `/about`         | About             | Public         |
| `/contact`       | ContactUs         | Public         |
| `/feedback`      | Feedback          | Public         |
| `/login`         | Login             | Public         |
| `/signup`        | Signup            | Public         |
| `/services`      | Services          | Authenticated  |
| `/admin`         | AdminDashboard    | Admin Only     |

---

## 🔐 Authentication Logic

- JWT stored in `localStorage` after login
- Token is sent via `Authorization` headers for protected API calls
- Routes like `/services` and `/admin` are protected using a custom `ProtectedRoute` component

---

## 🛠️ Technologies Used

| Purpose          | Library           |
|------------------|-------------------|
| Frontend         | React             |
| Styling          | Bootstrap, CSS    |
| Routing          | React Router DOM  |
| HTTP Requests    | Axios             |
| Notifications    | React Toastify    |
| Auth Handling    | JWT + LocalStorage|

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js and npm installed

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

> Ensure the backend is running on `http://localhost:8080`

---

## 🌐 API Integration

- All authenticated API calls include the JWT token:
  ```js
  axios.get("/admin/service-requests", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  ```
- Example endpoints used:
  - `/auth/signup`
  - `/auth/login`
  - `/api/workshops`
  - `/user/service-requests`
  - `/admin/workshops`

---

