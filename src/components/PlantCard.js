function GardenCard({id ,image ,name ,price}){
    return(
        <div className="w-full">
          <img className="w-full h-[250px] object-cover" src= {image}  alt=""></img>
           <div>
            <h4 className="font-bold text-xl">{name}</h4>
            <h4 className="font-semibold"> Price :{price}</h4>
            <button className="bg-green-500 p-2">IN STOCK</button>
           </div>
    
        </div>
    )
    }
    export  default GardenCard