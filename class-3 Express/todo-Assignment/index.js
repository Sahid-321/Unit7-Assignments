const express = require('express');
const app = express();
const Todos = require("./todo")
const db = require("./db.json") 

const port = 8081;
app.use(express.json());

const todos = new Todos();

app.get("/todos", (req, res) => {
    try {
        
        res.send(todos.getTodos())

    } catch (err) {
        res.status(404).send("Not Found")
    }
})

app.post("/todos", (req, res) => {
    try {
        const { todo } = req.body
        res.send(JSON.stringify(db.push(todo)));

    } catch (err) {
        res.status(500).send("Internal Server error");
    }
})

app.delete('/todo/:id', (req, res) => {
    try {
        const { id } = req.params
        res.status(200).send(todos.deleteTodo(id));
    } catch (err) {
        res.status(404).send("Id not found");
    }
})


app.put("/todos", (req, res) => {
    try {

        const { todo } = req.body
        res.send(todos.putTodo(todo));

    } catch (error) {

        res.status(500).send(" Server Error");
    }
})

app.listen(port, () => {

    console.log(`Server is running at port ${8081}`);
})