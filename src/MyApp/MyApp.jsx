import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const MyApp = () => {
  const [input, setInput] = useState("");
  const [inputArray, setInputArray] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    setInputArray([...inputArray, input]);

    setInput("");
  }

  console.log(inputArray);

  return (
    <div>
      <form action="">
        <TextField
          value={input}
          placeholder="enter todo"
          variant="outlined"
          color="primary"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <Button type="submit" onClick={addTodo}>
          ADD TODO
        </Button>
      </form>

      <div>{inputArray.map( (one , index) => (<ul key={index}><li>     {one}  </li></ul>))}</div>
    </div>
  );
};

export default MyApp;
