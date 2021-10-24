import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setTodos, TodoActions } from "../redux/actions";
import { RootState, TodoItem } from "../redux/types";
import Todo from "./Todo";

type TodoListProps = {
  todos: Array<TodoItem>;
  setTodos: (todos: Array<TodoItem>) => TodoActions;
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(`http://localhost:4000/todos`)
        .catch((error) => {
          throw new Error(error.message);
        });
      setTodos(response.data);
    };
    fetchTodos();
  }, []);
  
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

const mapStateToProps = (state: RootState) => {
  const todos = state.todos.todoItems;
  return { todos };
};

export default connect(mapStateToProps, { setTodos })(TodoList);