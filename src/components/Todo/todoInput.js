import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CssTextFieldWhite } from "../../commons/CssMUI";
import { Button } from "@mui/material";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../actions/todoActions";

function TodoInput(props) {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLists = {
      title: value,
      status: false,
    };

    dispatch(addTodo(newLists));
    setValue("");
  };
  const colorTextField = {
    color: "#fff",
  };

  return (
    <Box
      container
      component="form"
      sx={{ textAlign: "center" }}
      onSubmit={handleSubmit}
    >
      <CssTextFieldWhite
        className="focus-color"
        margin="normal"
        required
        fullWidth
        id="todo"
        label="What's need to be done?"
        name="todo"
        autoComplete="todo"
        autoFocus
        value={value}
        onChange={handleChangeInput}
        sx={colorTextField}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
      />
      <Button
        type="submit"
        variant="outlined"
        size="small"
        sx={{
          color: "#000",
          bgcolor: "pink",
          boder: "1px solid ",
          ":hover": {
            bgcolor: "#ea7aacfa", // theme.palette.primary.main
            color: "#000",
            border: "1px solid pink",
          },
        }}
      >
        ADD TASK
      </Button>
    </Box>
  );
}

export default TodoInput;
