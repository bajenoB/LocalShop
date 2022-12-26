import React from "react";
import { createBrowserHistory } from "history";
import "./Product.css";
import { useParams } from "react-router-dom";
const Item = function () {

    const [item,setItem]=React.useState(null);
    const {_id}=useParams();
    async function getItem(){
        await fetch('/'+_id).then(result=>result.json()).then(result=>setItem(result.cars))

    }
    React.useState(() => {
        getItem();
    }, null);
    return (
        <div className='flex_content'>
            {item ?
                <div>
                    <div>
                    <img src={item.image}  />
                    </div>
                    <div >
                        <p>Title: {item.title}</p>
                        <p>Price: {item.price}</p>
                        <p >{item.description}</p>
                        <p >{item.name}</p>
                        <p >{item.fuel}</p>
                        <p >{item.brand}</p>
                        <p >{item.year}</p>
                    </div>
                </div> : "Loading" }
            <div>
                {/* <img src={item.url} />
                {item ? item.title : "Loading"} */}
            </div>
            
            
        </div >
    )
}

export default Item;