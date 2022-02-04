import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import React,{useState} from 'react'

const ReactTodo = () => {

const [input, setInput] = useState('')
const [toDos, setToDos] = useState([])


function onAdd(event) {
  event.preventDefault();
  setToDos([...toDos , input])
  setInput('')
}

console.log(input)
console.log(toDos)

          return (
                    <div>
                              <h1>hello this is simple react ToDO</h1>

<form action="">
<FormControl>
  <InputLabel htmlFor="my-input">Enter toDo here</InputLabel>
  <Input value={input}  id="my-input"  aria-describedby="my-helper-text" onChange={(e) => {setInput(e.target.value)}} />

  <FormHelperText id="my-helper-text">Write your todo.</FormHelperText>
</FormControl>
<Button type='submit' variant='contained' onClick={onAdd} >Add</Button>

</form>



                    </div>
          )
}

export default ReactTodo
