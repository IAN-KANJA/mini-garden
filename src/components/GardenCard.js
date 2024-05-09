import React from "react"

function GardenCard({id, image, name, price}){
    return(
        <div>
          <img src={image} 
          alt="" />
          <div>
            <h4>Name: {name}</h4>
            <h4>Price: ${price}</h4>
            <h4>AVAILABLE-IN-STOCK</h4>
          </div>
           </div>
    )
    }
    export  default GardenCard;