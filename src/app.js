const express = require("express");
const app = express();
const { connectDB } = require("./database/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

app.get("/user", async (req, res) => {
  const userEmailId = req.body.emailId;

  try {
    const user = await User.find({ emailId: userEmailId });
    if (user.length === 0) {
      res.send("User not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    console.log("Error fetching user", error.message);
    res.status(500).send("Error fetching user");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const userFeed = await User.find({});
    if (userFeed.length === 0) {
      res.send("No feed");
    } else {
      res.send(userFeed);
    }
  } catch (error) {
    console.log("feed api error", error.message);
    res.status(500).send("No feed available");
  }
});

app.get("/findById", async (req, res) => {
  const id = req.body._id;

  try {
    const userId = await User.find({ _id: id });
    if (userId.length === 0) {
      res.send("No user found");
    } else {
      res.send(userId);
    }
  } catch (error) {
    console.log("No user id error", error.message);
    res.status(500).send("No user id available");
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
