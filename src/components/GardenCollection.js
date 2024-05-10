import React from 'react';
import GardenCard from './GardenCard';

const GardenCollection = ({plants}) => {
  return (
    <div className='bg-green-950'>
      <h1 className="text-3xl font-bold underline text-center italic text-yellow-100 ">Garden-Collection</h1>
      <div className='grid grid-cols-4 gap-4'>
      {plants.map((plant) => (
      <GardenCard key={plant.id} {...plant} />
       ))}
      </div>
    </div>
  );
};
 export default GardenCollection;


