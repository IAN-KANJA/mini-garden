import React, { useState, useEffect } from 'react';


const GardenCollection = () => {
   

  return (
    <div>
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



