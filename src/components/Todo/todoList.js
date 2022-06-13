import React, { useState, useRef} from "react";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector} from "react-redux";
import {
  checkTodo,
  deleteTodo,
} from "../../actions/todoActions";

import TodoUpdate from './todoUpdate'
function TodoList({todos,indexOfFirstTodo, indexOfLastTodo, handleTodo}) {
  const allTodo = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const completeTodo = allTodo.filter((item) => item.status === "true")
  const activeTodo = allTodo.filter((item) => item.status === "false")
  console.log("test",  todos.slice(indexOfFirstTodo, indexOfLastTodo))
  const handleCheck = (todo) => {
    dispatch(checkTodo(todo));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const listItemCss = {
    border: "2px dashed #d6b4ba",
    cursor: "pointer",
  };
  const styleColor = {
    color: "#e9d4d4" 
  }
  const handleAll = () => {
    handleTodo(allTodo)

  };
  const handleActive = () => {
    handleTodo(activeTodo)
  };
  const handleComplete = () => {
    handleTodo(completeTodo)
  };
  return (
    <>
      <Grid container justifyContent='center'>
        <Button sx={styleColor} onClick={handleAll}>All</Button>
        <Button sx={styleColor} onClick={handleActive}>Active</Button>
        <Button sx={styleColor} onClick={handleComplete}>Complete</Button>
      </Grid>
      <List  sx={{p: 0, mt: 1, backgroundColor: "#00000054"}}>
        {
          todos
          .slice(indexOfFirstTodo, indexOfLastTodo)
          .map((todo) => {
            return (
              <div key={todo.id}>
              <ListItem sx={listItemCss} className="Item">
                <ListItemButton dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      tabIndex={-1}
                      disableRipple
                      onClick={() => handleCheck(todo)}
                      checked={todo.status === "false" ? false : true}
                      sx={styleColor}
                      color="default"
                    />
                  </ListItemIcon>
                  <TodoUpdate
                    todo={todo}
                    styleColor={styleColor}
                  />
                  <IconButton>
                    <DeleteIcon
                      sx={styleColor}
                      onClick={() => handleDelete(todo.id)}
                    />
                   
                  </IconButton>
                </ListItemButton>
              </ListItem>
              </div>
            );
          })
        }
      </List>
    </>
  );
}

export default TodoList;
