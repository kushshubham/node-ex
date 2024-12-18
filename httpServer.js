const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})