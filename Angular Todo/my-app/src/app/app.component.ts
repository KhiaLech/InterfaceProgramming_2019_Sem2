import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: Todo[] = [];

  constructor(){
    this.todos.push(new Todo("Complete this task", false));
    this.todos.push(new Todo("Add support for adding todos", false));
  }

  title = 'ToDo Application';

}
