
const addTodoSaga = (payload) => {
  return ({
      type: 'ADD_TODO_SAGA',
      payload
  })
}
const getTodoSaga = (payload) => {
  return ({
      type: 'GET_TODO_SAGA',
      payload
  })
}
const deleteTodoSaga = (id) => {
  return ({
      type: 'DELETE_TODO_SAGA',
      id
  })
}
const checkTodoSaga = (id, payload) => {
  return ({
      type: 'CHECK_TODO_SAGA',
      id, payload
  })
}
const updateTodoSaga = (id) => {
  return ({
      type: 'UPDATE_TODO_SAGA',
      id
  })
  
}
const saveTodoSaga = (id, text) => {
  return ({
      type: 'SAVE_TODO_SAGA',
      id, text

  })
  
}
const addDataSaga = (payload) => {
  return ({
      type: 'ADD_DATA_SAGA',
      payload
  })
}
export  {
  addTodoSaga,
  deleteTodoSaga,
  checkTodoSaga,
  updateTodoSaga,
  saveTodoSaga,
  addDataSaga, 
  getTodoSaga
}

