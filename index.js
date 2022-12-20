const express = require("express")
const app = express()

app.get('/', (req, res) =>{
    res.send("Welcome to my first work with nodejs")
})
app.listen(3000, () => {
    console.log("Start Server at Port [3000]")
})