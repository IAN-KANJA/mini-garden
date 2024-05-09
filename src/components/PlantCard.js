import React,{ useState, useEffect } from "react"
import "./PlantCard.css";

function GardenCard({id ,image ,name ,price}){
    const [plants, setPlants] = useState([]);

    useEffect(() => {
      fetchPlants();
    }, []);
  
    const fetchPlants = async () => {
      try {
        const response = await fetch('http://localhost:6001/plants');
        const jsonData = await response.json();
        setPlants(jsonData.plants);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    return(

        <div className="plant-card-container">
        <ul>
        {plants.map(plant => (
          <li key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <p>{plant.name}</p>
            <p>${plant.price}</p>
          </li>
        ))}
        </ul>
            <button>IN STOCK</button>

           </div>
    )
    }
    export  default GardenCard