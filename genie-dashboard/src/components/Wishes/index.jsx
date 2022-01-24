import React from 'react';
import PropTypes from 'prop-types';
import './wishes.scss';

function Wishes(props) {
  let wishes = props.wishes;

  function renderWishes() {
    let wish = wishes.map((wish) => {
      return (
        <div key={wish.id} className="wishes--wish">
          <input type="checkbox" className="completed" />
          <p className="wishes--wish--input">{wish.wish_name}</p>
          <p className="wishes--wish--price">{wish.wish_price}</p>
        </div>
      );
    });
    return wish;
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
