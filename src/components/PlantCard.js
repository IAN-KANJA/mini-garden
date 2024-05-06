function GardenCard({id ,image ,name ,price}){
    return(
        <div className="gardencard">
          <img className="images" src= {image}  alt=""></img>
           <div>
            <h4 className="font-bold text-xl">{name}</h4>
            <h4 className="font-semibold"> Price :{price}</h4>
            <button>IN STOCK</button>
           </div>
    
        </div>
    )
    }
    export  default GardenCard