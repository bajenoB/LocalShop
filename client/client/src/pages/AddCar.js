import "./AddCar.css";
import { Link } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";


function AddCarApp() {
    const history = createBrowserHistory({ forceRefresh: true });
    const dataFetchedRef = React.useRef(false);
    React.useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
  
      fetch("/api/profile")
        .then((res) => res.json())
        .then((data) => {
          if (!data.isLogin) {
            history.push("/login");
            history.go();
          }
        });
    }, []);
    function AddCar() {
      
      fetch("/api/addcar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: document.getElementById("car-name").value,
          image: document.getElementById("car-image").value,
          price: document.getElementById("car-price").value,
          year: document.getElementById("car-year").value,
          brand: document.getElementById("car-brand").value,
          fuel: document.getElementById("car-fuel").value,
          country: document.getElementById("car-country").value,
          description:document.getElementById("car-desc").value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.isAdded) {
            ShowValidationMessage(
              data.error.errors[0].param,
              data.error.errors[0].msg
            );
          } else {
            history.push("/sell");
            history.go();
          }
          console.log(data);
        });
    }

    function ShowValidationMessage(param, msg) {
        // let fields = document.getElementsByClassName("add-inp");
        // Array.from(fields).forEach((element) => {
        //   element.style = "border: 1px solid black";
        // });
        
      }
      return (
        <div className="page" class="container">
          <div className="form">
            
            <h1>Додати машину</h1>
            <div className="add-fields">
              
              <div className="add-field">
                <label className="form-label">Название</label>
                <input  type="text"  id="car-name" className="nigger"></input>
              
                <label className="form-label">Фотография</label>
                <input type="text"   id="car-image" className="nigger"></input>
              
                <label className="form-label">Цена $</label>
                <input type="number"   id="car-price" className="nigger"></input>
              
                <label className="form-label">Описание</label>
                <input type="number"   id="car-desc" className="nigger"></input>
              
                <label className="form-label">Страна</label>
                <input type="number"   id="car-country" className="nigger"></input>
              
                <label className="form-label">Бренд</label>
                <input type="number"   id="car-brand" className="nigger"></input>
              
                <label className="form-label">Год</label>
                <input type="number"   id="car-year" className="nigger"></input>
              
                <label className="form-label">Топливо</label>
                <input type="number"   id="car-fuel" className="nigger"></input>
              </div>
    
              
    
              
    
              
            </div>
            <span id="error_message"></span>
            <button class="registerbtn" id="add-btn" onClick={AddCar}>
              ДОДАТИ
            </button>
          </div>
        </div>
      );
    }
    
    export default AddCarApp;