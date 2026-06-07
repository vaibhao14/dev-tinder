const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send("GET request to the user page")
})

app.post("/user", (req, res) => {
    res.send("POST request to the user page")
})

app.patch("/user", (req, res) => {
    res.send("PATCH request to the user page")
})

app.delete("/user", (req, res) => {
    res.send("DELETE request to the user page")
})

app.use("/", (req, res) => {
    res.send("dashboard page")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000...')
});