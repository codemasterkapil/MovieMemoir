import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// JSON and URL-encoded data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import database models and synchronize with Sequelize
import db from "./app/models/index.js";
db.sequelize.sync();

// Define a simple root route
app.get("/", (req, res) => {
  res.json({ message: "This is a simple CRUD project using Node.js and PostgreSQL" });
});

// Include your route handlers
import movieRoutes from "./app/routes/movie-routes.js";
import userRoutes from "./app/routes/user-routes.js"; 
movieRoutes(app);
userRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
