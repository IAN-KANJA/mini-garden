import React, { useState } from "react"

function GardenCard({id, image, name, price}){
  const [text, setText] = useState("AVAILABLE IN STOCK")

  function onChange(){
    setText("Not in Stock")
  }
    return(
        <div>
          <img src={image} 
          alt="" />
          <div>
            <h4>{name}</h4>
            <h4>${price}</h4>
            <button onClick={onChange}>{text}</button>
          </div>
           </div>
    )
    }
    export  default GardenCard;