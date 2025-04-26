# User Feedback System

A full-stack web application where users can submit their feedbacks, suggestions, bug reports, or feature requests.

Built using:
- Frontend: **React.js**
- Backend: **Node.js**, **Express.js**
- Database: **MongoDB (Atlas)**

---

## Features

- Submit feedback with name, email, message, and category
- View all feedbacks in an admin-style dashboard
- Filter feedbacks by category
- Sort feedbacks by date (Newest/Oldest)
- Neon orange-themed modern UI with dark mode design
- Responsive and clean interface

---

## Project Structure
User Feedback System/ 
├── backend/ 
|    ├── controllers/ 
|   ├── models/ 
|    ├── routes/
|   ├── config/
├── server.js 
└── .env 
|
├── frontend/
|   ├── src/ 
|       ├── components/
|       ├── services/ 
|       └── App.js
|       ├── public/ 
|   └── package.json 
|   └── package.json

## Technologies Used

- React.js
- Axios
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv
- Git & GitHub

## Development Tools
- Git & GitHub
- Postman (API testing)
- VS Code

## Architecture and Application Flow

1. The user fills the feedback form on the frontend (React.js).
2. On submit, frontend sends POST request to backend server (Node.js + Express.js) at `/api/feedback`.
3. Backend saves the feedback data into MongoDB database using Mongoose model.
4. Dashboard page fetches all feedbacks via GET request to `/api/feedback`.
5. Users can filter and sort feedbacks based on category or date.
6. The system is designed to be scalable, with clean API architecture and modular code organization.


## ScreenShots
<img width="959" alt="image" src="https://github.com/user-attachments/assets/00587300-46cd-440b-818c-fbb2c85ea984" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/67744395-bff4-41ab-8e2f-7d1f801881ed" />


## 🎥 Project Demo


https://github.com/user-attachments/assets/877f1b75-81db-4fb0-9407-d1d8c9221b5d




### Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/User-Feedback-System.git
cd User-Feedback-System

2. Backend Setup
cd backend
npm install

3.Configure your .env file inside backend/:
MONGO_URI=your_mongodb_connection_uri
PORT=5000

4.Frontend Setup
cd frontend
npm install
npm start
Frontend will start on: http://localhost:3000

npm run dev
Backend will run on: http://localhost:5000

Access the application in your browser at http://localhost:3000
```

### Author
Priyanka Singh
