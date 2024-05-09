import React from 'react';
import GardenCard from './GardenCard';



const GardenCollection = ({plants}) => {
  return (
    <div>
      <h1>Garden-Collection</h1>
      {plants.map((plant) => (
      <GardenCard key={plant.id} {...plant} />
       ))}

    </div>
  );
};
 export default GardenCollection;



