import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Register from "./pages/Registration";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Addcar from "./pages/AddCar"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createBrowserHistory } from "history";



function App() {
  const history = createBrowserHistory({ forceRefresh: true });
  return (
    <Router>
        <Routes history={history}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route  path="/register" element={<Register />}></Route>
            <Route  path="/addcar" element={<Addcar />}></Route>
        </Routes>
      </Router>
  );
}

  

  

export default App;
