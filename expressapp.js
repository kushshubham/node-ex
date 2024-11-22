const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/about', (req, res)=>{
    res.send('hello about')
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})