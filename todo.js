var ToDo = /** @class */ (function () {
    function ToDo(date, works) {
        this.date = date;
        this.works = works;
    }
    ToDo.prototype.addWork = function (work) {
        this.works.push(work);
    };
    return ToDo;
}());
var ToDoList = /** @class */ (function () {
    function ToDoList(todos) {
        this.todos = todos;
    }
    ToDoList.prototype.addTodo = function (todo) {
        var _a;
        var existingTodo = this.todos.find(function (t) { return t.date === todo.date; });
        if (existingTodo) {
            (_a = existingTodo.works).push.apply(_a, todo.works);
        }
        else {
            this.todos.push(todo);
        }
    };
    return ToDoList;
}());
var todo1 = new ToDo('2023-02-24', ['Buy cat food', 'Laundry']);
var todo2 = new ToDo('2023-02-25', ['Go to market', 'Send translated file']);
var todoList = new ToDoList([todo1, todo2]);
var newTodo = new ToDo('2023-02-25', ['Bath cat', 'Do homework']);
todoList.addTodo(newTodo);
console.log(todoList.todos);
