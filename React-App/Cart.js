import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between">
                {item.name}
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <p className="fw-bold">Total: ${total}</p>
        </>
      )}
    </div>
  );
}

export default Cart;

