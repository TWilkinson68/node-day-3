var fs = require("fs");
var path = require("path")

fs.readFile("./stuff.json", "UTF-8", (err, data)=>{
    if (err){
    throw err
    }else{
    var parsedJSON = JSON.parse(data);
    console.dir(parsedJSON);
    }
});


