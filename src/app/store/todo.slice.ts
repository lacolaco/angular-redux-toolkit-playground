import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoID } from "../model";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "a", completed: false },
    { id: 2, text: "b", completed: false },
    { id: 3, text: "c", completed: false }
  ] as Todo[],
  reducers: {
    addTodo(state, action: PayloadAction<{ id: TodoID; text: string }>) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    toggleTodo(state, action: PayloadAction<TodoID>) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
