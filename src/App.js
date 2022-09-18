import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBar name="Juancho" apellido="Feliz" />
      <Routes>
        <Route path="/cart" element= { <Cart /> } />
        <Route path="/" element= { <ItemListContainer /> } />
        <Route path="/category/:id" element= { <ItemListContainer /> } />
        <Route path="/item/:id" element= { <ItemDetailContainer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
