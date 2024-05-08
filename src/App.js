
import './App.css';
import AddPlant from './components/AddPlant';
import GardenCollection from './components/GardenCollection';
import Logo from './components/Logo';
import Search from './components/SearchPlant';
import PlantCard from './components/PlantCard';




function App() {
  return (
    <>
   
    <Logo />;
    <AddPlant />
    <Search />
    <GardenCollection />
    <PlantCard />

    </>
   
  );
}

export default App;
