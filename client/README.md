# 🎵 Music Events

Music Events is a **training Single Page Application (SPA)** built with **React**, created as part of my learning process at **SoftUni**.  
The project aims to practice and apply the core concepts learned in the **React course**, including component-based architecture, routing, authentication, and CRUD operations.

## 📌 Project Purpose

This project is **educational** and is not intended for production use.  
Its main goal is to demonstrate my understanding of:

- React fundamentals
- State management
- Client-side routing
- Communication with a REST API
- User authentication and authorization

## 🚀 Features

- 🔐 **Authentication**
  - User registration
  - User login
  - Logout functionality
  - Protected routes (only authenticated users can access certain pages)

- 🎤 **Events Management (CRUD)**
  - Create music events
  - View all events
  - View event details
  - Edit events (only by the owner)
  - Delete events (only by the owner)

- 👤 **User-specific functionality**
  - Event ownership
  - Conditional UI rendering based on authentication state

- 🧭 **Routing**
  - Client-side routing using **React Router**
  - Public and private routes

- 🧠 **State Management**
  - React hooks (`useState`, `useEffect`, `useContext`)
  - Context API for global state
  - *(Reducers are planned to be added in a future refactor)*

## 🛠️ Technologies Used

- **React**
- **React Router**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **SoftUni Practice Server** (REST API backend)

## 🔗 Backend

The application uses the **SoftUni Practice Server** as a backend service for handling data persistence and authentication.

👉 Backend server:  
https://github.com/softuni-practice-server/softuni-practice-server  


## 📂 Project Structure (Simplified)
src/
├── components/
├── contexts/
├── hooks/
├── services/
├── pages/
├── App.jsx
└── main.jsx

Install dependencies: npm install
Start the development server: npm run dev

## 🔑 Test Users

For testing purposes, the project includes **hardcoded users** in the backend.

These users are provided to make it easier to test authentication and authorization functionality without creating new accounts.

Example test credentials:

- Email: peter@abv.bg  
  Password: 123456

- Email: john@abv.bg  
  Password: 123456

> ⚠️ Note:  
> These users exist **only for development and learning purposes** and should not be used in a production environment.



