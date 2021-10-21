import { TodoActions } from "../actions";
import { ActionTypes } from "../actionTypes";
import { TodoState } from "../types";

const initialState: TodoState = {
  todoItems: []
};

const todos = (state = initialState, action: TodoActions): TodoState => {
  switch (action.type) {
    case ActionTypes.SET_TODOS: {
      const { todos } = action.payload;
      return {
        todoItems: todos
      };
    }
    default:
      return state;
  }
};

export default todos;