import "./Registration.css";
import React from "react";


function RegisterApp() {
    function Register() {
      fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: document.getElementById("user-name").value,
          surname: document.getElementById("user-surname").value,
          patronymic: document.getElementById("user-patronymic").value,
          email: document.getElementById("user-email").value,
          password: document.getElementById("user-password").value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // if (data.isRegister) {
          //   updateRegister(true);
          // } else {
          //   console.log(data.error.errors[0].msg);
          //   ShowValidationMessage(
          //     data.error.errors[0].param,
          //     data.error.errors[0].msg
          //   );
          //   updateRegister(false);
          // }
          console.log(data);
        });
    }
    return(
      <div className="page">
        <div className="form">
          <h1>Регистрация</h1>
          <div className="fields">
            <label className="form-label">Логин</label>
            <input class="nigger" type="text" id="user-name"></input>
            <label className="form-label">Почта</label>
            <input class="nigger" type="email" id="user-email"></input>
            <label className="form-label">Пароль</label>
            <input class="nigger" type="password" id="user-password"></input>
          </div>
          {/* <Link class="link" to="/login" draggable="false"> */}
          <button class="registerbtn" id="register-btn" onClick={Register}>
            Зарегаться
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  }

  export default RegisterApp;