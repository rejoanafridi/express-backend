const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>Hello world</h1>')
        res.statusCode = 200
        res.end('')
    } else {
        res.write('<h1>404 nou found</h1>')
        res.statusCode = 404
        res.end('')
    }
})

server.listen(8000, () => {
    console.log('Server is listing on port 8000')
})
