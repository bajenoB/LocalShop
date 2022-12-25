import "../css/Log.css";
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
          if(data.isLogin){
            history.push("/");
            history.go();
          }
          console.log(data);
        });
    }
    return (
      <div className="page">
        <div className="form">
          <h1>Вхід в особистий кабінет</h1>
          <span id="info">
            Для входу в кабінет введіть ел. пошту
            <br />
            та отримайте код авторизації.
          </span>
          <div className="fields">
            <label>Почта</label>
            <input type="text" id="userlog"></input>
            <label className="form-label">Пароль</label>
            <input type="password" id="password-log"></input>
          </div>
  
          {/* <Link class="link" to="/" draggable="false"> */}
          <button id="login-btn" onClick={LogIn}>
            УВІЙТИ
          </button>
          {/* </Link> */}
          <Link className="link" to="/register" draggable="false">
            <button id="reg-btn">ЗАРЕЄСТРУВАТИСЯ</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default LoginApp;