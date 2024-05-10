import AddPlant from './components/AddPlant';
import GardenCollection from './components/GardenCollection';
import Logo from './components/Logo';
import Search from './components/SearchPlant';
import { useEffect, useState } from 'react';
import './index.css'
function App() {
  const [plants, setPlants] = useState([]);
const [searchInput, setSearchInput] = useState('')

console.log(searchInput);

  useEffect(() => {
    fetch(' http://localhost:3000/plants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchInput.toLowerCase()))


  return (
    <>
   
    <Logo />
    <AddPlant />
    <Search searchInput={searchInput} setsearchInput={setSearchInput}/>


    <GardenCollection plants={filteredPlants}/>

    </>
   
  );
}

export default App;



