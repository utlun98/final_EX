import React, { useState, useRef, forwardRef } from 'react';
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector} from "react-redux";
import IconButton from "@mui/material/IconButton";
import { BorderNoneTextField } from "../../commons/CssMUI"
import Typography from "@mui/material/Typography";
import Alert from "../Alert";
import {
  saveTodo,
} from "../../actions/todoActions";
function TodoUpdate({todo, styleColor}) {
  const [showItem, setShowItem] = useState(true)
  const dispatch = useDispatch();
  const updateRef = useRef({});
  const handleUpdate = () => {
    setShowItem(false)
   };
   const handleSave = (todo) => {
    const text = updateRef.current[todo.id].value;

    dispatch(saveTodo(todo, text));
    setShowItem(true)
  };
  return (
    <>
    {showItem ? (
      <> 
      <Container>
       <ListItemText
        className={todo.status === "true" ? "strike" : ""}
        primary={`${todo.title}`}
        sx={styleColor}
       />
        <Typography component="p" variant="p" sx={{ color: "#ecb2d3" }}>
        {todo.date}
       </Typography>
       
       </Container>
       <IconButton edge="end" sx={styleColor}>
         <BorderColorIcon 
           onClick={() => handleUpdate()} 
           />
       </IconButton>
    </>
   ) : ( 
      <>
       <BorderNoneTextField
         type="text"
         defaultValue={todo.title}
         fullWidth
         required
         inputRef={(e) => (updateRef.current[todo.id] = e)}
         sx={styleColor}
       />
       <IconButton edge="end" sx={{ color: "#e9d4d4", pl: 2 }}>
         <BookmarkIcon onClick={() => handleSave(todo)} />
       </IconButton>
     </> 
   )} 
  
  </>
  );
}

export default TodoUpdate;