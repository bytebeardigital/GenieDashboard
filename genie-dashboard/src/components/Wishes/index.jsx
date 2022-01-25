import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import './wishes.scss';

function Wishes({ wishes }) {
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
                <div key={singleWish.id} className="wishes--wish">
                  <input type="checkbox" className="completed" />
                  <p className="wishes--wish--input">{singleWish.wish_name}</p>
                  <NumberFormat
                    value={singleWish.wish_price}
                    className="wishes--wish--price"
                    displayType="text"
                    thousandSeparator={true}
                    prefix="$"
                  />
                </div>
              ))
            )}
          </div>
          <div className="wishes__total">
            <div className="wishes__total-wrapper">
              <h4 className="wishes__total-total">$3,400</h4>
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
