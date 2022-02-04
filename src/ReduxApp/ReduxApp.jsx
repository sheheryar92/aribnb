import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectTodo } from "../features/counter/TodoSlice";
import { addTodo } from "../features/counter/TodoSlice";

const ReduxApp = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function saveTodo(event) {
    event.preventDefault();

    dispatch(
      addTodo({
        item: input,
      })
    );

    setInput("");
  }

  const todoList = useSelector(selectTodo);

  const dataList = todoList.map((oneTodo, index) => (
    <ul key={index}>
      <li>{oneTodo.item}</li>
    </ul>
  ));

  console.log(dataList, "this");

  return (
    <div>
      <h1>redux</h1>

      <form action="">
        <TextField
        placeholder="enter toDo to submit"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button disabled={!input} type="submit" onClick={saveTodo}>
          Submit
        </button>
      </form>

      {dataList}
    </div>
  );
};

export default ReduxApp;
