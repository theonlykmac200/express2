const express = require("express")

//sometimes you will be strange auto adds by vs code, this one isn't causing an error but sometimes they do, so keep an eye out for these
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
    const tip = total * (tipPercentage / 100)
    //great full message, helps to see what is really happening! 
    res.send(`if the Bill is $${total} and the percentage you'd like to tip is ${tipPercentage}% than you should leave $${tip}`)
})
const magicAnswer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

//nice job using Math.random(), it might be easier to use/read if you make it a variable and pass the variable
app.get("/magic/:thisIsTheQuestion", (req, res) => {
    //rando variable used to break up the code
    const rando = Math.floor(Math.random() * magicAnswer.length)
    res.send(`<div><h1>The answer to the question: "${(req.params.thisIsTheQuestion)}?" is:</h1><h1> ${magicAnswer[rando]}</h1></div>`)

})




app.listen(3000, ()=> {
    console.log("we're listening")
})