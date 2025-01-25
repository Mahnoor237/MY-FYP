
//server.js
require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const reviewRoute = require("./router/review-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");


  

const errorMiddleware = require("./middlewares/error-middleware"); // Import error middleware

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());




app.use("/api/auth", authRoute);

app.use("/api/form", reviewRoute);

app.use("/api/admin", adminRoute);




app.use(errorMiddleware);





const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`); 
});

});