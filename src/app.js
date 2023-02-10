
const express = require('express')
const app = express()
const userRouter = require('./users/users.router')


app.use(express.json())


app.get("/", (req, res) => {
    res.status(201).json({
        message: "Server Ok!"
    })
})

app.use("/", userRouter)

app.listen(9000, () =>{
    console.log("Server started at http://localhost:9000")
})

module.exports = app
