const http = require("http");
const data  = require("./Data")
const mysever = http.createServer((req ,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
  res.write(JSON.stringify(data))

    console.log("server is running");
    
    res.end("hello");

})


mysever.listen(8080,()=>{
    console.log("server is running on port 5000");
})



// const http = require("http");
// // Create an HTTP server
// http.createServer((req, resp) => {
//   resp.writeHead(200, {'Content-type': 'application\json'});
//   resp.write(JSON.stringify({name: "anand", email: "aanan@gmail.com"}))
//   resp.end();
// }).listen(8080);