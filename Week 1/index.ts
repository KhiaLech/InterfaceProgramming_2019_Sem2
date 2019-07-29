class TodoItem{
    title: string;
    constructor(title:string){
        this.title = title;
    }
}

var myTodo = new TodoItem("Go on Break");

console.log(myTodo.title);

var count =0;


while (count <= 10){
    console.log(count);
    count++;
}

