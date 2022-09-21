const { error } = require("console");
const db = require("./db.json") 
class Todos {
    constructor() {
        this.todos = db;
    }

    getTodos() {
        return this.todos;
    }

    addTodos(data) {
        let mx = 0;

        this.todos.forEach((el) => {
            mx = Math.max(mx, el.id)
        })

        data.id = mx + 1;

        this.todos.push(data);
        return "Todo successfully added";
    }

    deleteTodo(id) {
        let index = null
        this.todos.forEach((el, i) => {
            if (el.id == id) {
                index = i;
            }
        })

        if (index == null) {
            throw error
        } else {
            this.todos.splice(index, 1);
            return "deleted"
        }
    }

    putTodo(data) {
        let flag = false;
        this.todos.forEach((el, i) => {
            if (data.id == el.id) {
                this.todos[i] = data
                flag = true;
            }
        })

        if (flag) {
            return "Updated"
        } else {

            this.todos.push(data);
            return "Data Added"
        }


    }
}

module.exports = Todos