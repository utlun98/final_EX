import axios from 'axios'

const user = JSON.parse(localStorage.getItem('user'))
const baseURL = "http://localhost:3001/api/v1/todos"
export const ApiAddTodo = (data) => {
  return axios
        .post(baseURL, data,{
          headers: {
            Authorization : `Bearer ${user.token}`
          }
        })       
};
export const ApiGetTodo = () => {
  return axios
        .get(baseURL,{
          headers: {
            Authorization : `Bearer ${user.token}`
          }
        })       
};
export const ApiDeleteTodo = (id) => {
  return axios
        .delete(`${baseURL}/${id}`,{
          headers: {
            Authorization : `Bearer ${user.token}`
          }
        })       
};
export const ApiCheckTodo = (payload) => {
  const status = (payload.status === 'true'? false : true)
  return axios
        .post(`${baseURL}/${payload.id}`,{
          'title':  payload.title,
          'status': status
        },{
          headers: {
            Authorization : `Bearer ${user.token}`
          }
        })       
};
export const ApiSaveTodo = (payload, text) => {
  return  axios
        .post(`${baseURL}/${payload.id}`,{
          'title':  text,
          'status': payload.status
        },{
          headers: {
            Authorization : `Bearer ${user.token}`
          }
        })       
};