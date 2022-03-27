const express = require('express')
const Process = require("process");
const app = express()
const port = process.env.NODE_PORT
var count = 0

app.get('/', (req, res) => {
    console.log("Node Js : You hit me so hardly")
    res.send('Node Server: I am alive and i want to alive')
})

app.get('/counter', (req, res) => {
    console.log("Node Js : You hit me so hardly")
    count++
    res.send(count.toString())
})
app.listen(port, () => {
    console.log(`Node server: Application started:port is:${process.env.NODE_PORT}`)
    console.log(`Node Js: listening on port ${port}`)
})