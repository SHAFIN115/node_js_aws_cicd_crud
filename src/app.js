const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello! Server is running...");
});

// Example inline user route
app.use("/api/users", userRoutes);
// Auth routes
app.use("/api/auth", authRoutes);

module.exports = app;