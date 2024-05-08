import React, { useState, useEffect } from 'react';
import './GardenCollection.css';

const GardenCollection = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
      fetchPlants();
    }, []);
  
    const fetchPlants = async () => {
      try {
        const response = await fetch('db.json');
        const jsonData = await response.json();
        setPlants(jsonData.bots);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

  return (
    <div className="garden-collection-container">
      <h1>Garden-Collection</h1>
      <ul>
        {plants.map(plant => (
          <li key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <p>{plant.name}</p>
            <p>${plant.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
 export default GardenCollection;


