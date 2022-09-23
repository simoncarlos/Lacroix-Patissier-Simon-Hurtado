import './App.css';
import Cart from './components/Cart/Cart';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/cart" element= { <Cart /> } />
          <Route path="/" element= { <ItemListContainer /> } />
          <Route path="/category/:id" element= { <ItemListContainer /> } />
          <Route path="/item/:id" element= { <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
