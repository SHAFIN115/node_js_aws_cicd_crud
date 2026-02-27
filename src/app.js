const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello! Server is running...");
});

// Example inline user route
app.get("/api/users", (req, res) => {
  res.send("User route works ✅");
});
// Auth routes
app.use("/api/auth", authRoutes);

module.exports = app;