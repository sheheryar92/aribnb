import {
  Avatar,
  Box,
  Button,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@material-ui/core";
import React from "react";
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useState } from "react";

const Todo = ({ todo }) => {
  const db = getFirestore();
  function onDel(params) {
    const delRef = doc(db, "todos", todo.id);
    deleteDoc(delRef);
    console.log(todo.id);
  }

  function onEdit(params) {}

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
   
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  function handleOpen(params) {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  function onUpdate(params) {
    const updateRef = doc(db, "todos", todo.id);
    updateDoc(updateRef, {
      todo: input,
    });
  }
  return (
    <>


    <List style={{    display: 'flex'}}>
     
     <ListItem style={{    backgroundColor: "whitesmoke"}}>
       <ListItemText primary={[todo.todo]} />
     </ListItem>

     <Button variant="contained" color="secondary" onClick={onDel}>
       DELETE
     </Button>
     <Button
       variant="contained"
       color="primary"
       onClick={(e) => setOpen(true)}
     >
       EDIT
     </Button>
   </List>
 



      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Edit And Update ToDo</h1>

          <Input
            placeholder={todo.todo}
            onChange={(e) => setInput(e.target.value)}
          />
          <div style={{display: 'flex',
  justifyContent:'space-evenly',
  paddingTop: 20}}>
          <Button
            variant="outlined"
            color="secondary"
            disabled={!input}
            onClick={onUpdate}
          >
            Save Update
          </Button>
          <Button  variant="outlined" color="primary" onClick={handleClose}>
            Close Edit
          </Button>
          </div>
   


        </Box>
      </Modal>
    </>
  );
};

export default Todo;
