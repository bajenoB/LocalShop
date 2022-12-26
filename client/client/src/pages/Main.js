import "./Main.css";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import React from "react";

import pic from "./nigger.jpg";

const url="http://localhost:3001/";


function Main(props){
    const [car, setCar] = useState([]);

    useEffect(() => {
        getCar();
    }, [])

    const getCar = async () => {
        await fetch('/api/getcars')
            .then(result  => result.json())
            .then(result  => setCar(result.cursor));
    }


     if (!car) {
         return <div>
             <div>Loading...</div>
         </div>
     }
     else if (car == null || car?.length <= 0) {
         return <div>
            <div>There is no Cars</div>
            <div onClick={getCar} className={'button'}>Update</div>
         </div>
     }

    return<div className="back" >

        <div className="head"> 
        <a href="http://localhost:3001/register" class="floating-button">Regist</a>
        </div>
        <div className="textU">
            
            <a href="#">+380999999 </a>
            <a href="#">Соц сети</a>
            <a href="#">вул.Велика Кільцева, 58 </a>
        
        
        
        </div>
        <div className="textU">
            
            <a href="#">Заказать звонок </a>
            <a href="#">Заказать звонок </a>
            <a href="#">Карта проезда </a>
        
        
        
        </div>
        <div className="daun">
        <button className="btnn">Купить </button> 
        <button className="btnn">Продать </button> 
        <button className="btnn">Услуги </button> 
        <button className="btnn">Про компанию </button>
        <button className="btnn">Контакты </button>      
        </div>

        <div className="textB">Оголошення про продаж б/у авто з пробігом в Києві</div>
        <div className="left_menu"> 
        
        <ul>
        <li><a class="jews"href="#">Кузов</a></li>
        <li><a class="jews"href="#">Хетчбек </a></li>
        <li><a class="jews"href="#">Седан</a></li>
        <li><a class="jews" href="#">Универсал</a></li>
        <li><a class="jews"href="#">Кроссовер</a></li>
        <li><a class="jews"href="#">Купе</a></li>
        <li><a class="jews"href="#">Кабриолет</a></li>
        <li><a class="jews"href="#">Внедорожник</a></li>
        <li><a class="jews"href="#">Лифтбек</a></li>
        <li><a class="jews"href="#">Пикап</a></li>
        <li><a class="jews"href="#">Минивен</a></li>
        <li><a class="jews"href="#">Фургон</a></li>




        </ul>
        
        
        </div>
    <div className="main_products_cards">
        {car?.map((cursor) => {
            return <div className="product-item" >
                <img className="cardimg" src={cursor.image}></img>
                <h4>имя {cursor.name}  </h4>
                <h4>бренд {cursor.brand}  </h4>
                <h5>страна {cursor.country}</h5>
                <h5>опис {cursor.description}</h5>
                <h5>топливо {cursor.fuel}</h5>
                <h5>цена{cursor.price}</h5>
                <h5>год{cursor.year}</h5>
                
                <a href= {url+cursor._id} >Подробнее</a>
                
                
                
            </div>
        })}
    </div>
</div>;
}

export default Main;