import React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import PaginationUI from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
const Pagination = ({ todosPerPage, totalTodos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
    {!pageNumbers.length ? <></> :
      <List sx={{display: "inline-flex"}}>
        {pageNumbers.map(number => (
          <ListItem key={number} className='page-item' sx={{p: 0}}>
            <ListItemButton dense 
              sx={{justifyContent: "center"}}
              onClick={() => paginate(number)} 
              className='page-link'>
              {number}
            </ListItemButton> 
          </ListItem>
        ))}
      </List>
      }
    </>

  );
};

export default Pagination;