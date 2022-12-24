import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';
import Body from './components/Body/Body';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/cart" element= { <Cart /> } />
          <Route path="/" element= { <Body /> } />
          <Route path="/products" element= { <ItemListContainer /> } />
          <Route path="/category/:id" element= { <ItemListContainer /> } />
          <Route path="/item/:id" element= { <ItemDetailContainer /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
