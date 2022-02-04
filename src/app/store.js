import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/counter/TodoSlice'
import studentReducer from '../features/counter/NewSlice'
import reduxTodoReducer from '../features/counter/ReduxTodoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    storeNameofStudentList : studentReducer,
    todos: reduxTodoReducer
  },
});
