import React, { useState } from 'react';

function WishForm() {
  const [wish, setWish] = useState('');

  console.log(wish);
  console.log(setWish);
  return (
    <form>
      <input className="form-control mb-3" type="text" value={wish} placeholder="Add Todo..." />
      <input className="form-control mb-3" type="text" value={wish} placeholder="Add Price..." />

      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default WishForm;
