import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Register from "./pages/Registration";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes history={history}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route  path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
  );
}



  

export default App;
