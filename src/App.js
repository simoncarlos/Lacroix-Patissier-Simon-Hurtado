import { useEffect } from "react";

import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <>
      <NavBar name="Juancho" apellido="Feliz" />
      <ItemListContainer greeting="Hola, soy el futuro Item List Container"/>
    </>
  );
}

export default App;
