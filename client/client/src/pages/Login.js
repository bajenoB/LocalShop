import "./Login.css";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import React from "react";

function LoginApp() {
    const history = createBrowserHistory({ forceRefresh: true });
    const dataFetchedRef = React.useRef(false);
    React.useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
  
      fetch("/api/profile")
        .then((res) => res.json())
        .then((data) => {
          if (data.isLogin) {
            history.push("/");
            history.go();
          }
        });
    }, []);
    function LogIn() {
      fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userlog: document.getElementById("userlog").value,
          password: document.getElementById("password-log").value,
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    }
    return (
      <div className="page" class="container">
        <div className="form">
          <h1>Вхід в особистий кабінет</h1>
          
          <div className="fields">

            <label className="form-label">Почта</label>
            <input type="text" className="nigger" id="userlog"></input>

            <label className="form-label">Пароль</label>
            <input type="password" className="nigger" id="password-log"></input>
          </div>
  
          
          <Link className="link"  to="/register" draggable="false">
            <button className="registerbtn" onClick={LogIn} id="reg-btn">ЗАРЕЄСТРУВАТИСЯ</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default LoginApp;