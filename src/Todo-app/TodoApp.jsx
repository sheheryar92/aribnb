import React, { useState, useEffect } from "react";

import firebaseApp from "./FireBase/Firebase";

import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  serverTimestamp,
  onSnapshot,
  query,
} from "firebase/firestore";

import {
  Button,
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
} from "@material-ui/core";
import Todo from "./Todo";
const TodoApp = () => {
  // FIREBASE DATABASE WORK

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function onAdd(event) {
    event.preventDefault();

    // Add a new document in collection "todos"
    try {
      const callRefTwo = collection(db, "todos");
      addDoc(callRefTwo, { todo: input, createdAt: serverTimestamp() });
    } catch (err) {
      console.log(err);
    }

    // setTodos([...todos, input]);
    setInput("");
  }

  //initialize service
  const db = getFirestore();

  useEffect(() => {
    const callRef = collection(db, "todos");
    // querry
    const querry = query(callRef, orderBy("createdAt", "desc"));
    // const sequence = orderBy('createdAt', 'desc')
    //    getDocs(callRef ,sequence ).then((snapshot) => {

    //     setTodos(snapshot.docs.map(      (  doc) => ( { id: doc.id , todo: doc.data().todo })   )     )  ;
    onSnapshot(querry, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
      );

      // console.log(snapshot.docs.map(d => d.data().todo))

      // console.log(snapshot.docs.map(d => d.id))
    });

    // });
  }, [input]);

  return (
    <>
   
    <h1 style={{padding: 50}}> TODO APP   🟢</h1> 
      <form action="">
        <FormControl sx={{ alignContent: 'center' }}>
          <InputLabel>ToDo App</InputLabel>
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={onAdd}
        >
          ADD TODO
        </Button>
      </form>
      {todos.map((val, index) => (
        <ul style={{    margin: 'auto',
          padding: 0,
          width: '80%', paddingTop: 20}} key={index}>
          {" "}
          <Todo todo={val} />{" "}
        </ul>
      ))}
    </>
  );
};

export default TodoApp;
