import React from 'react';
import './App.css';
import AddPlant from './components/AddPlant';
import GardenCollection from './components/GardenCollection';
import Logo from './components/Logo';
<<<<<<< HEAD
import GardenCollection from './components/GardenCollection';
=======
import Search from './components/SearchPlant';

import GardenCollection from './components/GardenCollection';
import { useEffect, useState } from 'react';



>>>>>>> dd83c3878f121d9414f2f33df9a0a8abb0caad74


function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch(' http://localhost:3000/plants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((data) => setPlants(data));
  }, [])
  return (
    <>
   
    <Logo />;
<<<<<<< HEAD
    <AddPlant />
    <GardenCollection />
=======
    <AddPlant /> 

    <Search />


    <GardenCollection plants={plants}/>

>>>>>>> dd83c3878f121d9414f2f33df9a0a8abb0caad74
    </>
   
  );
}

export default App;



