const http = require("http")

const users = [
    { id: 1, name: "zhangsan111" },
    { id: 2, name: "lisi222" },
    { id: 3, name: "wangwu333" },
    { id: 4, name: "zhaoliu444" },
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