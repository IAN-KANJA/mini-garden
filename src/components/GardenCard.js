import React, { useState } from "react"

function GardenCard({id, image, name, price}){
  const [text, setText] = useState("AVAILABLE IN STOCK")

  function onChange(){
    setText("Not in Stock")
  }
    return(
        <div className="flex flex-wrap">
        <div className="bg-zinc-400 rounded-lg p-4">
        <div className=" bg-stone-300 p-4 rounded-lg">
          <img src={image} 
          alt="" className="w-full h-48 object-cover mb-4"/>
          <div>
            <h4>{name}</h4>
            <h4>${price}</h4>
            <button onClick={onChange} className=" bg-green-950 text-yellow-100 border-2 border-black rounded-md ">{text}</button>

            </div>  
            </div>
            </div>
            </div>
    )
    }
    export  default GardenCard;