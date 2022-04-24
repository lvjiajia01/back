const http = require("http")

const users = [
    { id: 11111, name: "zhangsan66666" },
    { id: 22222, name: "lisi77777" },
    { id: 33333, name: "wangwu88888" },
    { id: 44444, name: "zhaoliu99999" },
    { id: 55555, name: "xiaoming" },
    { id: 666666, name: "xiaohong" },
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