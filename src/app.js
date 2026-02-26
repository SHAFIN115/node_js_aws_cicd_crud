const express = require("express");
const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello! Server is running...");
});

// Example inline user route
app.get("/api/users", (req, res) => {
  res.send("User route works ✅");
});

module.exports = app;