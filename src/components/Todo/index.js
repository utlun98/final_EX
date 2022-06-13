import React from "react";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Alert from "../Alert";
import { logoutUserAction } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTodo } from "../../actions/todoActions";
import Pagination from "./Pagination"
import {useNavigate} from "react-router-dom"

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const [todosList, setTodosList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);
  const user = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    dispatch(getTodo());
  }, []);
  useEffect(() => {
    setTodosList(todos)
  }, [todos]);
  const handleLogOut = () => {
    dispatch(logoutUserAction());
  };
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  
  
  // Change page

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const handleTodo = todoList => setTodosList(todoList);
  

  return (
    <Grid className="bg-img2">
      <Grid container justifyContent="space-between">
        <Grid item md={4}>
          <Typography component="h1" variant="h5" sx={{ color: "#FC6C85" }}>
            TO DO của {user.firstname} {user.lastName}
          </Typography>
        </Grid>
        <Grid item md={4}>
        <Alert />
        </Grid>
        <Grid item md={4} sx={{textAlign: "end"}}>
        <IconButton sx={{ color: "#e9d4d4" }} onClick={handleLogOut}>
          <Typography component="h3" sx={{ color: "#FC6C85" }}>
            LOG OUT
          </Typography>
          <LogoutIcon  />
        </IconButton>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={0} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <TodoInput />
          <TodoList 
            indexOfLastTodo={indexOfLastTodo}
            indexOfFirstTodo={indexOfFirstTodo}
            todos={todosList ? todosList : todos}
            handleTodo = {handleTodo}
            />
        </Grid>
        <Grid item xs={0} md={3}></Grid>
      </Grid>
      <Grid className='pagination'>
        <Pagination
          todosPerPage={todosPerPage}
          totalTodos={todosList ? todosList.length : todos.length}
          paginate={paginate}
        />
      </Grid>
      
    </Grid>
  );
}

export default Todo;
