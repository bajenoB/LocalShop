import "./AddCar.css";
import { Link } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";


function AddCarApp() {
    
    async function AddCar() {
      console.log("nigger");
      await fetch("/api/addcar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: document.getElementById("car-name")?.value,
          image: document.getElementById("car-image")?.value,
          price: document.getElementById("car-price")?.value,
          year: document.getElementById("car-year")?.value,
          brand: document.getElementById("car-brand")?.value,
          fuel: document.getElementById("car-fuel")?.value,
          country: document.getElementById("car-country")?.value,
          description:document.getElementById("car-desc")?.value,
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
          
          <h1>Добавить машину</h1>
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
          <button  type="submit" className="registerbtn" id="add-btn" onClick={AddCar}>
            ДОДАТИ
          </button>
        </div>
        
      </div>
    );
    }
    
    
    export default AddCarApp;