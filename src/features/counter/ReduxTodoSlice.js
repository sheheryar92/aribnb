import { createSlice } from '@reduxjs/toolkit';

const initialState = {
          todos: []
};

const ReduxTodoSlice = createSlice({
  name: 'this  to add todos slice  action',
  initialState,
  reducers: {
            addTodo : (state, action) => {
              state.todos.push(action.payload)
            } 
  },
});

export const {addTodo} = ReduxTodoSlice.actions;

export const selectTodo = (state) => state.todos;
export default ReduxTodoSlice.reducer;
