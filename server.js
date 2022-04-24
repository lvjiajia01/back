const http = require("http")

const users = [
    { id: 1, name: "zhangsan66666" },
    { id: 2, name: "lisi77777" },
    { id: 3, name: "wangwu88888" },
    { id: 4, name: "zhaoliu99999" },
]

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    if(req.url === '/api/users') {
        res.end(JSON.stringify(users))
    }else{
        res.end("Not Found!")
    }
})

server.listen(3000, () => {
    console.log("server is running at port 3000!")
})