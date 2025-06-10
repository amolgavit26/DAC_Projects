# 🧑‍💼 SmartHire Careers – Online Job Portal (Frontend)

Welcome to **SmartHire Careers**, an online job application platform built with **React** and **Bootstrap**, designed to connect job seekers and employers. This is the frontend codebase of the full-stack project.

---

## 🚀 Features

### ✅ Authentication
- **Sign Up** and **Sign In** pages for new and existing users.
- Token-based login using `localStorage`.
- Authenticated routes for job posting and editing.

### 💼 Job Management
- Post jobs with fields like Role, Company Name, Details.
- View job listings dynamically from backend.
- Edit or delete existing jobs (Admin/Employer functionality).
- Apply to jobs via a popup form.

### 📋 Forms
- **Contact Form**: For user inquiries.
- **Feedback Form**: Collects user feedback with rating and comments.

### 📚 Static Pages
- **Home Page** with hero section, features, and call-to-action.
- **About Us** with team bios and project mission.
- **Footer** with links, branding, and legal info.

---

## 🗂️ Folder Structure

```
/src
├── components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── JobCard.jsx
├── pages
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── EditJob.jsx
│   ├── Feedback.jsx
│   ├── Home.jsx
│   ├── Jobs.jsx
│   ├── PostJob.jsx
│   ├── Signin.jsx
│   └── Signup.jsx
├── services
│   └── userService.js
├── styles
│   └── HomePage.css
├── App.jsx
└── main.jsx
```

---

## 🔗 Routes

| Path           | Component     | Access         |
|----------------|---------------|----------------|
| `/`            | Home          | Public         |
| `/signin`      | Signin        | Public         |
| `/signup`      | Signup        | Public         |
| `/jobs`        | Jobs          | Public         |
| `/post-job`    | PostJob       | Authenticated  |
| `/edit-jobs`   | EditJob       | Authenticated  |
| `/feedback`    | Feedback      | Public         |
| `/contact`     | Contact       | Public         |
| `/about`       | About         | Public         |

---

## 🔐 Authentication Logic

- JWT stored in `localStorage` after login.
- Token is sent in headers for protected routes like:
  - POST `/job-post`
  - PUT `/job-edit/:id`
  - DELETE `/job-delete/:id`

---

## 🛠️ Technologies Used

| Purpose        | Library              |
|----------------|----------------------|
| UI Components  | React Bootstrap      |
| Routing        | React Router DOM     |
| API Calls      | Axios                |
| Notifications  | React Toastify       |
| Styling        | CSS + Bootstrap      |
| State Handling | React Hooks          |

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js and npm installed

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

> Ensure your backend is running on `http://localhost:7800` as expected by `userService.js`.

---
