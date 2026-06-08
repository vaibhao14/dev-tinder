const express = require("express");
const app = express();
const { connectDB } = require("./database/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Create a new user
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "virat@kohli.com",
    password: "virat@123",
  });

  try {
    await user.save();
    res.send("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB...");
    app.listen(7777, () => {
      console.log("Server is running on port 7777...");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

