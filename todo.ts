class ToDo {
    date: string;
    works: string[];

    constructor(date: string, works: string[]) {
        this.date = date;
        this.works = works;
    }

    addWork(work: string) {
        this.works.push(work);
    }
}

class ToDoList {
    todos: ToDo[];

    constructor(todos: ToDo[]) {
        this.todos = todos;
    }

    addTodo(todo: ToDo) {
        const existingTodo = this.todos.find((t) => t.date === todo.date);

        if (existingTodo) {
            existingTodo.works.push(...todo.works);
        } else {
            this.todos.push(todo);
        }
    }
}

const todo1 = new ToDo('2023-02-24', ['Buy cat food', 'Laundry']);
const todo2 = new ToDo('2023-02-25', ['Go to market', 'Send translated file']);

const todoList = new ToDoList([todo1, todo2]);

const newTodo = new ToDo('2023-02-25', ['Bath cat', 'Do homework']);

todoList.addTodo(newTodo);

console.log(todoList.todos);