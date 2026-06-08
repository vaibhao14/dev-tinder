const express = require("express");
const app = express();

app.get("/user/getUserData", (req, res) => {
  throw new Error("Something went wrong!");
  res.send("This will not be reached.");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("An error occurred: " + err.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
