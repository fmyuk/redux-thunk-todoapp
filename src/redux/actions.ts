import axios from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "./actionTypes";
import { RootState, TodoItem } from "./types";

type SetTodosAction = {
  type: ActionTypes.SET_TODOS;
  payload: { todos: TodoItem[] };
};

export const setTodos = (todos: TodoItem[]): SetTodosAction => ({
  type: ActionTypes.SET_TODOS,
  payload: { todos }
});

export const fetchTodos = (): ThunkAction<
  void,
  RootState,
  unknown,
  TodoActions
> => {
  return async (dispatch: Dispatch<TodoActions>) => {
    const response = await axios.get(`http://localhost:4000/todos`)
      .catch((error) => {
        throw new Error(error.message);
      });
    dispatch(setTodos(response.data));
  };
};

export type TodoActions = SetTodosAction;