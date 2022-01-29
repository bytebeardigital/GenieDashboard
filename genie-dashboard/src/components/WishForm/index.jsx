import React, { useState } from 'react';
import './wishForm.scss';

function WishForm() {
  const [wish] = useState({
    wish: '',
    price: null
  });

  const sendWish = ({ wish }) => {
    const newWishes = { ...wish, wish_name: wish.wish, wish_price: wish.price };
    console.log(newWishes);
  };

  console.log(wish);
  return (
    <form className="wishform">
      <input
        className="form-control mb-3"
        type="text"
        value={wish.wish}
        placeholder="Enter Wish..."
      />
      <input
        className="form-control mb-3"
        type="text"
        value={wish.price}
        placeholder="Enter Price..."
      />

      <button type="button" className="btn btn-primary button" onClick={sendWish}>
        Submit
      </button>
    </form>
  );
}

export default WishForm;
