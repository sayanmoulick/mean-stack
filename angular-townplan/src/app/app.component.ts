import { Component } from '@angular/core';
import {Todo} from './todo';
// Import class so we can register it as dependency injection token
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'crud-app';
  newTodo: Todo = new Todo();
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
    /*todoDataService.getAllBooks().subscribe(response => 
      {console.log(response)});*/
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    // console.log(this.books());
    return this.todoDataService.getAllTodos();
  }

  books() {
    return this.todoDataService.getAllBooks();
  }
}
