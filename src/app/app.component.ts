import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AppStore } from "./app.store";
import { Todo } from "./model";
import { addTodo, toggleTodo } from "./store/todo.slice";

@Component({
  selector: "app-root",
  template: `
    <h2>Redux toolkit</h2>

    <input #todoText />
    <button
      type="submit"
      (click)="addTodo(todoText.value); todoText.value = ''"
    >
      add Todo
    </button>

    <div *ngFor="let item of todoList$ | async">
      <input
        type="checkbox"
        [checked]="item.completed"
        (click)="toggleTodo(item)"
      />
      <span>ID {{ item.id }}: {{ item.text }}</span>
    </div>
  `
})
export class AppComponent {
  readonly todoList$: Observable<Todo[]>;

  constructor(readonly store: AppStore) {
    this.todoList$ = this.store.select(state => state.todo);
  }

  addTodo(text: string) {
    const todos = this.store.selectSync(state => state.todo);
    this.store.dispatch(addTodo({ id: todos.length + 1, text }));
  }

  toggleTodo(item: Todo) {
    this.store.dispatch(toggleTodo(item.id));
  }
}
