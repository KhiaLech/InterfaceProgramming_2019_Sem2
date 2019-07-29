var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
    }
    return TodoItem;
}());
var myTodo = new TodoItem("Go on Break");
console.log(myTodo.title);
var count = 0;
while (count <= 10) {
    console.log(count);
    count++;
}
