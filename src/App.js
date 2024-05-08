
import './App.css';
import AddPlant from './components/AddPlant';
import Logo from './components/Logo';
import Search from './components/SearchPlant';
import GardenCollection from './components/GardenCollection';
import { useEffect, useState } from 'react';




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
    <AddPlant />
    <Search />
    <GardenCollection plants={plants}/>
    

    </>
   
  );
}

export default App;



