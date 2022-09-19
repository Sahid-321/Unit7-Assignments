const express = require("express");
const app = express();
const fs = require('fs');
const { parse } = require("path");
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/",(req,res) => {
    res.send("hello")
})

app.get("/products",(req, res) => {
    fs.readFile("./db.json",{ encoding: 'utf-8'},(err, data) => {
res.send(data)
    })
})

app.post("/products",(req,res) => {
    fs.readFile("./db.json",{encoding: 'utf-8'},(err, data)=>{
        const parsed = JSON.parse(data)
        parsed.products = [...parsed.products, req.body]
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:'utf-8'},()=>{
            res.send("Product added")
        })
    })
})

app.delete("/product/:id",(req,res) => {
    const {id} = req.params;
    fs.readFile("./db.json",{encoding: 'utf-8'},(err, data)=>{
        const parsed = JSON.parse(data)
        parsed.products = parsed.products.filter((elem) => [...parsedelem.products, req.body])
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:'utf-8'},()=>{
            res.send("Product Deleted")
        })
    })
})

app.put("/product/:id",(req,res) => {
    const {id} = req.params;
    fs.readFile("./db.json",{encoding: 'utf-8'},(err, data)=>{
        const parsed = JSON.parse(data)
        parsed.products = parsed.products.filter((elem) => elem.id ===req.body )
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:'utf-8'},()=>{
            res.send("Product Updated")
        })
    })
})


const PORT = 8080
app.listen(PORT, (req, res) => [
    console.log(`Listening on port ${PORT}`)

])
