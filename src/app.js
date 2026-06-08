const express = require("express");
const app = express();
const { adminAuthMiddleware } = require("./middlewares/auth");

app.use("/admin", adminAuthMiddleware);

app.get("/admin/list", (req, res) => {
  res.send("Admin list");
});

app.get("/admin/data", (req, res) => {
  res.send("Admin data");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
