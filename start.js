const express = require('express')
const app = express()


// server route
app.get("/", (req, res) => {
    res.send("Hello world")
})




app.listen(7000, () => {
    console.log("Server is running on port 7000")
})