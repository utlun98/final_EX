import logo from './logo.svg';
import './App.css';
// import Todo from './components/Todo';
import Todo from './components/Todo';
import Singup from './components/Register';
import { BrowserRouter as Router, Routes, Route, Outlet, NavLink,  Navigate } from 'react-router-dom';
import Login from './components/Login'
import LoadingPage from './components/Loading'

function App() {
 
  function PrivateRoute() {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/" />;
  }
  
  function useAuth() {
    return localStorage.getItem('user')
  }
  
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/todo" element={<PrivateRoute />}>
          <Route path="" element={<Todo />} />
        </Route>
        <Route path="/singup" element={<Singup/>} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />

    </Routes>
    </Router>

  );
}

export default App;
