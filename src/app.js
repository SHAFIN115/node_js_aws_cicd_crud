const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Server is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

module.exports = app;