import React from "react";
import Todo from "./Todo";

const TodoList = () => {
  const todos: any = {};
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo: any, index: any) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
        : "No todos, yay!"
      }
    </ul>
  );
};

export default TodoList;