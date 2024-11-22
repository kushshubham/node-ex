const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    if(req.url == '/'){
        res.end('Home Page')

    }else if(req.url == '/about'){
        res.end('About Page')
    }else if(req.url == '/hello'){
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }
    
    else{
        res.end('404 Page')
    }
})

server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})