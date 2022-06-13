import axios from 'axios'

const baseURL = "http://localhost:3001/api/v1/users"
export const Login = (data) => {
  return axios
        .post(`${baseURL}/login`, data) 
};

export const Register = (data) => {
  return axios
        .post(baseURL, data) 
};

export const Logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}











