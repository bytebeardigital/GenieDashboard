import React from 'react';
import PropTypes from 'prop-types';
import './wishes.scss';

function Wishes({ wishes }) {
  let wishData = wishes;

  console.log(wishData);
  function renderWishes() {
    wishData.map((wish) => {
      console.log(wish);
      return (
        <div key={wish.id} className="wishes--wish">
          <input type="checkbox" className="completed" />
          <p className="wishes--wish--input">name</p>
          <p className="wishes--wish--price">200.00</p>
        </div>
      );
    });
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
          <div className="wishes__content d-flex justify-content-start">{renderWishes()}</div>
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
