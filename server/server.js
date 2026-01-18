import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/mongodb.js"; // import the connection function

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json()); // parses JSON body

// Connect to MongoDB
connectDB(process.env.MONGODB_URL);

// Test route, response from the server
//In order to avoid repeatedly running server use nodemon package (set that in packagejson file) 
//the server will automaetically run no need to manually run it everytime. ("dev":"nodemon server.js")
//npm run dev - is enough
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
