import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
  deleteTodo(todo: Todo) {
    console.log("delete works");\
    //this is really cool because it solves the client side without a refresh from the server, still need to hit server//
    this.todos = this.todos.filter(td => td.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }
}
