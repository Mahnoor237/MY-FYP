# Fake Product Review Monitoring System

This project is a web-based system that helps detect and prevent fake product reviews. It allows users to submit and view product reviews while ensuring fraudulent reviews are flagged. Admins can monitor and manage reviews through an admin panel.

## Features
- Users can register, log in, and submit product reviews
- Fake reviews are detected based on sentiment analysis.
- Admin panel for managing users and reviews.
- Users cannot submit reviews after repeated reviews for the same product.

## Technologies Used
- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js, MongoDB
- **Tools:** Postman, JWT Authentication, Sentiment Analysis

## How to Run the Project

1. Clone the repository:  
   ```bash
   git clone https://github.com/Mahnoor237/MY-FYP.git

2. Backend setup
   Navigate to the backend folder:
   cd server1
   Install dependencies:
   npm install
   Run the backend server:
   nodemon server.js
3. Frontend Setup
   Navigate to the frontend folder:
   cd client
   Install dependencies:
   npm run dev
   
## Project Structure
   MY-FYP/
│-- client/         # Frontend code (React, Vite)
│-- server1/        # Backend code (Node.js, Express, MongoDB)
│-- README.md       # Project documentation
│-- package.json    # Dependencies and scripts
│-- .gitignore      # Ignored files for Git

## Environment Variables
Create a .env file in the backend directory with the following variables:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=my_secret_key

   
