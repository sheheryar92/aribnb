import { createSlice } from '@reduxjs/toolkit';

const initialState = {
          studentList : ['hello']
};

const NewSlice = createSlice({
  name: 'studet',
  initialState,
  reducers: {

          onAdd: (state, action) => {
                    state.studentList.push(action.payload)
          }
  },
});

export const {onAdd} = NewSlice.actions;

export default NewSlice.reducer;
