import React, { useState } from 'react';
import Wishes from '../../components/Wishes';
import PropTypes from 'prop-types';
import './wishesboard.scss';
import WishForm from '../../components/WishForm';

function WishesBoard(props) {
  const wishes = props.data;

  const [wishList] = useState(wishes);

  return (
    <div
      className="main_content_inners wishesBoard"
      style={{ minHeight: '68vh', transition: '0.5s', margin: 30 }}>
      <div className="container-fluid wishesBoard--list  mb-4">
        <div className="row justify-content-center">
          <Wishes wishes={wishes} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="wishesBoard--form">
            <h3>Wish Form</h3>
            <WishForm data={wishList} />
          </div>
        </div>
        <div className="col-6">
          <div className="wishesBoard--form">Favorite Wish</div>
        </div>
      </div>
    </div>
  );
}

WishesBoard.propTypes = {
  data: PropTypes.array
};
export default WishesBoard;
