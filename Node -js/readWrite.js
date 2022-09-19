let fs = require('fs')
let value = process.argv[2];
let fileName = process.argv[3];
if(value === "read"){
let content = fs.readFileSync(fileName,{
    encoding: 'utf-8'
});

console.log("Read this file", content);
}

if(value === "delete"){
    let content = fs.unlinkSync(fileName,{
        encoding: 'utf-8'
    });
    
    console.log("Delete this file", content);
    }