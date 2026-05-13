# School Library Management API

A robust RESTful API built for managing library operations, including authors, books, students, and attendants. This project follows the MVC (Model-View-Controller) architecture.

## 🚀 Features
* [cite_start]**Full CRUD**: Manage Authors, Books, Students, and Attendants [cite: 57-73].
* [cite_start]**Borrowing Logic**: Strict rules to ensure books are only borrowed when available [cite: 74-92].
* [cite_start]**Returning Logic**: Clear fields and reset book status to "IN" [cite: 93-104].
* [cite_start]**Data Population**: Detailed responses for borrowed books using Mongoose population [cite: 105-115].

## 🛠️ Tech Stack
* [cite_start]**Runtime**: Node.js [cite: 6]
* [cite_start]**Framework**: Express.js [cite: 7]
* [cite_start]**Database**: MongoDB with Mongoose [cite: 8]

## ⚙️ Setup Instructions
1. [cite_start]**Clone the repository**: `git clone <your-repo-url>` [cite: 134]
2. [cite_start]**Install dependencies**: `npm install` [cite: 134]
3. [cite_start]**Environment Variables**: Create a `.env` file and add your `MONGO_URI` and `PORT`[cite: 134].
4. **Start the server**: `node server.js`

## 📡 API Endpoints
* [cite_start]**Books**: `POST /books`, `GET /books`, `GET /books/:id` [cite: 63-66]
* [cite_start]**Borrowing**: `POST /books/:id/borrow` [cite: 77]
* [cite_start]**Returning**: `POST /books/:id/return` [cite: 95]
* [cite_start]**Others**: Endpoints for `/authors`, `/students`, and `/attendants`[cite: 57, 68, 71].

## 📂 Project Structure
* [cite_start]`/models`: Mongoose schemas [cite: 118]
* [cite_start]`/controllers`: Business logic and route handlers [cite: 119]
* [cite_start]`/routes`: API endpoint definitions [cite: 120]
* [cite_start]`/config`: Database connection configuration [cite: 122]
