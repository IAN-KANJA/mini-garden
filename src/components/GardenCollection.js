import React, { useState, useEffect } from 'react';

const GardenCollection = () => {
  // Define state for any stateful variables you need
  const [plants, setPlants] = useState([]);

  // useEffect can be used for fetching data or any other side effects
  useEffect(() => {
    // Example: Fetch plants data from an API
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(data => {
        setPlants(data);
      })
      .catch(error => {
        console.error('Error fetching plants data:', error);
      });
  }, []);

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