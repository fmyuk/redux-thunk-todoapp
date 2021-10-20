export type TodoItem = {
  id: number;
  content: string;
  completed: boolean;
};

export type TodoState = {
  todoItems: Array<TodoItem>;
};

export type RootState = {
  todos: TodoState;
};