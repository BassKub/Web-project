const express = require("express")
const app = express()

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/home.html')
})

app.get('/product', function(req, res) {
    res.sendFile(__dirname + '/Zerotwo.html')
})

app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/Error.html')
})

app.listen(3000, () => {
    console.log("Start Server at Port [3000]")
})