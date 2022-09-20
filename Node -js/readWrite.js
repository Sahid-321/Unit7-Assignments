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

    if(value === 'write'){
        let content = fs.writeFile(fileName, "Hello world is written",(err)=>{
            if(err) throw err;
            console.log("File written");
        })
     
    }

    if(value === 'append'){
        let content = fs.appendFileSync(fileName,'data appended')
        console.log("Data appended")
    }

    if(value === "create"){
        fs.writeFile("newFile.txt", "hello this is new file",(err)=>{
            if(err) throw err;

            console.log("New file added");
        })
    }

    if(value === "rename"){
        fs.rename("newFile.txt", "renamedFile.txt",(err)=>{
            
            if(err) throw err;

            console.log("file renamed");

        })
    }