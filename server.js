const express = require("express")
const { totalmem } = require("os")


const app = express()


app.get("/greeting", (req, res) => {
    res.send("Hello Stranger")
})

app.get("/greeting/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`)
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    const tip = total * (tipPercentage/100)
    res.send(`if the Bill is $${total} and the percentage you'd like to tip is ${tipPercentage}% than you should leave $${tip}`)
})





app.listen(3000, ()=> {
    console.log("we're listening")
})