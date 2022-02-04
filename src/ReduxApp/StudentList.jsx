import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {onAdd} from '../features/counter/NewSlice'

const StudentList = () => {

      const dispatch =    useDispatch();

const [input, setInput] = useState('');


function addStudent(event) {
          
          event.preventDefault();

          dispatch(onAdd(input))

          setInput('')

}


class FirstClass {
  constructor(name , id , age) {
    this.name= name;
    this.id= id;
    this.age= age;
  }

  getAge () {
   return `user is ${this.age} year old`
  }

};

const classObject = new FirstClass ('user' , 'id' , 24);
const second = new FirstClass ('user' , 'id' , 56);
console.log(second.getAge(), 'this is method calling out from class')
console.log(classObject.getAge(), 'this is method calling out from class')
console.log(classObject, 'this is object')


  return <div>

<h1>ADD STUDETNS</h1>

<form action="">

<input value={input} type="text" placeholder='add student name here' onChange={(event) => {setInput(event.target.value)}} />
<button type="submit" onClick={addStudent}>add</button>

</form>




  </div>;
};

export default StudentList;
