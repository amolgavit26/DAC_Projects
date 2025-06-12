
# 🚗 CarServiceHub - Car Service Platform (Backend) 🧑‍🔧

A backend service for a Car Service Booking Platform, built with **Spring Boot**, **Java**, and **MySQL**. 
It supports user authentication, workshop management, service requests, and admin functionalities with JWT-based authorization.

---

## ✅ Purpose

This application provides the backend functionality for a car servicing portal, including:

- User registration and login with JWT-based authentication  
- Role-based access (User, Admin)  
- Workshop posting, editing, and deletion (Admin)  
- Car service appointment creation and tracking (User/Admin)
- Secure RESTful API structure
- Data persistence via MySQL

---

## 📁 Project Structure

```
Car_Service_Platform/
├── src/
│   ├── main/
│   │   ├── java/com/carservice/
│   │   │   ├── controller/             # REST Controllers
│   │   │   ├── dao/                    # JPA Repositories
│   │   │   ├── dto/                    # Data Transfer Objects
│   │   │   ├── entity/                 # JPA Entities
│   │   │   ├── security/               # JWT Security Configs
│   │   │   └── service/                # Business Services
│   │   └── resources/
│   │       └── application.properties  # DB Config and JWT Secret
├── pom.xml                             # Maven Configuration
```

---

## 🧱 Architecture & Technologies

### 📦 Tech Stack

| Layer              | Technology                     |
|--------------------|---------------------------------|
| Language           | Java 21                         |
| Framework          | Spring Boot                    |
| ORM & DB Access    | Spring Data JPA                 |
| Security           | Spring Security + JWT           |
| Database           | MySQL                           |
| Build Tool         | Maven                           |
| Authentication     | JWT                             |

---

## ⚙️ Configuration

Edit the `application.properties` file with your local DB config:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/car_service_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

jwt.secret=your_secret_key
```

---

## 🚀 How to Run

1. Clone this repo:

   ```bash
   git clone https://github.com/your-username/car-service-backend.git
   cd car-service-backend/Backend/Car_Service_Platform
   ```

2. Set up your MySQL DB and update credentials in `application.properties`.

3. Build the project:

   ```bash
   mvn clean install
   ```

4. Start the backend:

   ```bash
   mvn spring-boot:run
   ```

The app will be available at: `http://localhost:8080`

---

## 🔐 Authentication

- Login endpoint: `/auth/login`
- Register endpoint: `/auth/signup`
- Use returned JWT token for accessing protected endpoints with:
  
  ```
  Authorization: Bearer <your_token>
  ```

---

## 📘 API Endpoints

### 🔑 Auth
| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| POST   | `/auth/signup` | Register a new user   |
| POST   | `/auth/login`  | Login and get JWT     |

### 🧑 Users
| Method | Endpoint                | Description                    |
|--------|--------------------------|--------------------------------|
| GET    | `/user/service-requests`| View logged-in user's requests |
| POST   | `/user/service-requests`| Create new service request     |

### 🛠️ Workshops
| Method | Endpoint              | Description                   |
|--------|------------------------|-------------------------------|
| GET    | `/api/workshops`       | View all workshops (public)   |
| POST   | `/admin/workshops`     | Add workshop (admin only)     |
| PUT    | `/admin/workshops/{id}`| Edit workshop                 |
| DELETE | `/admin/workshops/{id}`| Delete workshop               |

### 📋 Service Requests
| Method | Endpoint                       | Description                      |
|--------|----------------------------------|----------------------------------|
| GET    | `/admin/service-requests`       | Admin view of all service reqs   |
| GET    | `/user/service-requests`        | View own service requests        |
| POST   | `/user/service-requests`        | Create a service request         |

---

## 🗄️ Database Tables

### `user`
| Column     | Type           |
|------------|----------------|
| id         | BIGINT         |
| first_name | VARCHAR(255)   |
| last_name  | VARCHAR(255)   |
| email      | VARCHAR(255)   |
| password   | VARCHAR(255)   |
| role       | ENUM           |

### `workshop`
| Column         | Type         |
|----------------|--------------|
| id             | BIGINT       |
| name           | VARCHAR(255) |
| address        | VARCHAR(255) |
| contact_number | VARCHAR(255) |

### `service_request`
| Column           | Type           |
|------------------|----------------|
| id               | BIGINT         |
| car_model        | VARCHAR(255)   |
| customer_name    | VARCHAR(255)   |
| issue_description| TEXT           |
| appointment_date | DATETIME       |
| user_id          | BIGINT (FK)    |
| workshop_id      | BIGINT (FK)    |

---


