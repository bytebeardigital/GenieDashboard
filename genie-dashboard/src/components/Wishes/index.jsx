import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { BiTrashAlt } from 'react-icons/bi';
import './wishes.scss';

function Wishes({ wishes }) {
  const wishTotal = () => {
    let wishMapped = wishes.map((wish) =>
      wish.wishes.map((singleWish) => singleWish.wish_price).reduce((total, a) => total + a, 0)
    );

    let total = parseFloat(wishMapped);

    return <NumberFormat displayType="text" value={total} prefix="$" thousandsSeparator={true} />;
  };

  function deleteWish() {
    console.log('delete wish');
  }

  if (!wishes) {
    return <h1>Uh Oh!</h1>;
  } else;
  return (
    <div className="wishes">
      <div className="wishes__wrapper">
        <div className="wishes--header">
          <h3 className="overview--heading">Wishes</h3>
        </div>
        <div className="wishes__container">
          <div className="wishes__content d-flex justify-content-start">
            {wishes.map((wish) =>
              wish.wishes.map((singleWish) => (
                <div key={singleWish.id} className="wishes--wish justify-content-between">
                  <div className="enterWish d-inline-flex">
                    <input type="checkbox" className="completed" />
                    <p className="wishes--wish--input">{singleWish.wish_name}</p>
                  </div>{' '}
                  <NumberFormat
                    value={singleWish.wish_price}
                    className="wishes--wish--price"
                    displayType="text"
                    thousandSeparator={true}
                    prefix="$"
                  />
                  <button className="wishes--wish--delete" onClick={deleteWish}>
                    <BiTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="wishes__total">
            <div className="wishes__total-wrapper">
              <h4 className="wishes__total-total">
                <p>{wishTotal()}</p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Wishes.propTypes = {
  wishes: PropTypes.array
};
export default Wishes;
