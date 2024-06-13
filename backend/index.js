// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./config/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
// import tweetRoute from "./routes/tweetRoute.js";
// import cors from "cors";

// dotenv.config({
//     path:".env"
// })
// app.use(express.static("public")) 
// databaseConnection();
// const app = express(); 

// // middlewares


// app.use(express.urlencoded({
//     extended:true
// }));
// app.use(express.json());
// app.use(cookieParser());
// const corsOptions = {
//     origin:"https://twitter-o7tn.vercel.app",
//     credentials:true
// }

// app.use(cors(corsOptions));

// // app.use(cors());

// app.get("/", (req, res) => {
//     res.send("API is running...");
// });

// // api
// app.use("/api/v1/user",userRoute);
// app.use("/api/v1/tweet", tweetRoute);
 

// app.listen(process.env.PORT,() => {
//     console.log(`Server listen at port ${process.env.PORT}`);
// })


import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";

// Load environment variables from .env file
dotenv.config({
    path: ".env"
});

// Initialize Express app
const app = express();

// Middleware to serve static files
app.use(express.static("public"));

// Connect to the database
databaseConnection();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS options
const corsOptions = {
    origin: "https://twitter-o7tn.vercel.app",
    credentials: true
};

app.use(cors(corsOptions));

// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});
