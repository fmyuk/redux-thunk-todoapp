import { TodoState } from "../types";

const initialState: TodoState = {
  todoItems: []
};

const todos = (state = initialState, action: any): any => {
  return state;
}

export default todos;