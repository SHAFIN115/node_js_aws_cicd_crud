const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

// Enable CORS
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

module.exports = app;