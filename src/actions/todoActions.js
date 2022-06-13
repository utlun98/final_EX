
export const addTodo = (payload) => {
  return ({
      type: 'ADD_TODO',
      payload
  })
}
export const getTodo = () => {
  return ({
    type: 'GET_TODO',
})
}
export const deleteTodo = (id) => {
  return ({
      type: 'DELETE_TODO',
      id
  })
}
export const checkTodo = (payload) => {
  return ({
      type: 'CHECK_TODO',
      payload
  })
}
export const saveTodo = (payload,text) => {
  return ({
      type: 'SAVE_TODO',
    payload, text

  })
  
}
export const addLogin = (payload) => {
  return ({
      type: 'ADD_DATA',
    payload

  })
  
}

