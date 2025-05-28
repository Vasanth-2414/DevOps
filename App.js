import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Simple Shopping App</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList addToCart={addToCart} />
        </div>
        <div className="col-md-4">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default App;

