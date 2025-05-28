import React from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Smartphone', price: 500 },
  { id: 3, name: 'Headphones', price: 150 },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <ul className="list-group">
        {products.map(p => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {p.name} - <span className="text-muted">${p.price}</span>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

