import React from "react";
import Navbar from './components/navbar';
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
