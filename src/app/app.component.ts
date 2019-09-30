import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todos =[
  
    {
      label: "Bring milk",
      done:false,
      priority:3
    },
    {
      label: "Mobile Bill",
      done:true,
      priority:1
    },
    {
      label: "Clean House",
      done:false,
      priority:3
    },
    {
      label: "Fix the Bulb",
      done:false,
      priority:5
    }

  ];
addTodo(newTodoLabel){
  var newTodo={
    label:newTodoLabel,
    priority:1,
    done:false
  };
  this.todos.push(newTodo);
}
deleteTodo(todo){
  this.todos=this.todos.filter(t => t.label !== todo.label);
}
}
