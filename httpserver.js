var http = require("http");

var fs = require("fs");

var server = http.createServer((req,res)=>{
     console.log("request received");
     var filename = "home.html";
     if(req.url=="/home" ){
         filename="home.html";
     }
     else if(req.url=="/about"){
         filename="about.html";
     }
     else if(req.url=="/contact"){
         filename="contact.html";
     }

     fs.readFile(filename,"utf8",afterDataRetrived);
    
    function afterDataRetrived(error,data){
       if(error){
           res.write("unable to read File");
       }
       else{
          res.write(data);
       }
       res.end();
    }
    
});

server.listen(7000,()=>{
    console.log("server is running at port 7000");
});

