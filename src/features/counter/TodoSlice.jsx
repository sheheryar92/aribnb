import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
  //addTodo: (state  <------ , action)

  //state is the
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,

  //reducer is like setTodolist
  reducers: {
    addTodo: (state, action) => {
      // state is the current state of addTodo
      // action , this is the function that actually executed
      // action has payload
      state.todosList.push(action.payload);
    },
  },
});

export const { addTodo } = TodoSlice.actions;
export const selectTodo = (state) => state.todo.todosList;
export default TodoSlice.reducer;
