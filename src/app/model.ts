export type TodoID = number;

export interface Todo {
  id: TodoID;
  text: string;
  completed: boolean;
}
