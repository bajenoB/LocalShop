import "./Main.css";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import React from "react";
import pic from "./nigger.jpg";




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


    // if (!car) {
    //     return <div>
    //         <div>Loading...</div>
    //     </div>
    // }
    // else if (car == null || car?.length <= 0) {
    //     return <div>
    //         <div>There is no Cars</div>
    //         <div onClick={getCar} className={'button'}>Update</div>
    //     </div>
    // }

    return(
        <div className="page">
          <div className="form">
            <h1> nigger</h1>
           {/* //<img className="jopa" src={pic}> </img> */}
          </div>
        </div>
      );
}

export default Main;