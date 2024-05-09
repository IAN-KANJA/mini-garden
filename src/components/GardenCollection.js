<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Garden-Collection</h1>
=======

import React, { useState, useEffect } from 'react';

import React from 'react';
import GardenCard from './GardenCard';




const GardenCollection = ({plants}) => {
  return (
    <div>
      <h1>Garden-Collection</h1>

>>>>>>> dd83c3878f121d9414f2f33df9a0a8abb0caad74
      <ul>
        {plants.map(plant => (
          <li key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <p>{plant.name}</p>
            <p>${plant.price}</p>
          </li>
        ))}
      </ul>
<<<<<<< HEAD
=======

      {plants.map((plant) => (
      <GardenCard key={plant.id} {...plant} />
       ))}


>>>>>>> dd83c3878f121d9414f2f33df9a0a8abb0caad74
    </div>
  );
};
 export default GardenCollection;


<<<<<<< HEAD
=======

>>>>>>> dd83c3878f121d9414f2f33df9a0a8abb0caad74
