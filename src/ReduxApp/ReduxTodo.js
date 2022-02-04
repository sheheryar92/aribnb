import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addTodo} from '../features/counter/ReduxTodoSlice'
import {selectTodo} from '../features/counter/ReduxTodoSlice'

const ReduxTodo = () => {

  const [input , setInput] = useState('');

const dispatch = useDispatch();

function todoFun(event) {
  event.preventDefault();

  dispatch(addTodo(
   input 
  ))
  setInput('')
}






let selectedValue = useSelector(selectTodo)
console.log(selectedValue.todos, 'this is selected value')


const data = selectedValue.todos.map(  (val , index) => ( <ul key={index}><li>{val}</li></ul> ) )


  return <div>
            <h1>readux todo</h1>

<form>
  <input value={input} type="text"  onChange={event => { setInput(event.target.value)}} />
  <button type="submit" onClick={todoFun}>ADD TODO</button>
</form>





{data}





  </div>;
};

export default ReduxTodo;
