import "./Registration.css";
import React from "react";


function RegisterApp() {
    function Register() {
      fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: document.getElementById("user-name").value,
          email: document.getElementById("user-email").value,
          password: document.getElementById("user-password").value,
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    }
    return(
      <div className="page">
        <div className="form">
          <h1>Регистрация</h1>
          <div className="fields">
            <label className="form-label">Логин</label>
            <input className="nigger" type="text" id="user-name"></input>
            <label className="form-label">Почта</label>
            <input className="nigger" type="email" id="user-email"></input>
            <label className="form-label">Пароль</label>
            <input className="nigger" type="password" id="user-password"></input>
          </div>
          {/* <Link class="link" to="/login" draggable="false"> */}
          <button className="registerbtn" id="register-btn" onClick={Register}>
            Зарегаться
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  }

  export default RegisterApp;