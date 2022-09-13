import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <>
      <NavBar name="Juancho" apellido="Feliz" />
      <ItemDetailContainer />
      <ItemListContainer greeting="Hola, soy el futuro Item List Container"/>
    </>
  );
}

export default App;
