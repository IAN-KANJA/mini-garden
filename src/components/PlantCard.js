import React from "react"

function GardenCard({id, img, name, price}){
    return(
        <div>
          <img src={img} 
          alt="" />
          <div>
            <h4>{name}</h4>
            <h4>${price}</h4>
            <h4>AVAILABLE-IN-STOCK</h4>
          </div>
           </div>
    )
    }
    export  default GardenCard;