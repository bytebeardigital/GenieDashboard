import React, { useState } from 'react';
import './collectables.scss';

function Collectables() {
  const [onOverview] = useState(true);
  return (
    <>
      <div className="collectables--single">
        <div className="collectables--single-container">
          <img src="./assets/images/foxy-gif.gif" className="collectable-img" alt="" width={100} />
        </div>
        <h3 className="collectable-name">
          Foxy Kawaii <span className="edition-num">#12/542</span>
        </h3>

        {!onOverview && (
          <div className="collectable">
            <hr />
            <p className="collectable-info">
              <strong>Edition:</strong> of 528
            </p>
            <p className="collectable-info">
              <strong>Created by:</strong> Friends of ByteBear
            </p>
            <p className="collectable-info">
              <strong>Collection:</strong> Kute Kawaii
            </p>
            <p className="collectable-info">
              <strong>Type:</strong> Open Edition
            </p>
            <p className="collectable-info">
              <strong>Released:</strong> Mar 23, 2021
            </p>
            <p className="collectable-info">
              <strong>Current Value:</strong> $500.00
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Collectables;
