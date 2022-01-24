import React from 'react';
import Wishes from '../../components/Wishes';
import Budgets from '../../components/Budgets';
import Collectables from '../../components/Collectables';
import PropTypes from 'prop-types';
import Goals from '../../components/Goals';
function OverviewBoard({ data }) {
  if (!data) return null;
  let wishes = data.wishes;
  console.log(wishes);
  return (
    <div className="adminBoard">
      <div className="container-fluid wishesBoard--list mb-4">
        <div className="row justify-content-center">
          <Wishes wishes={wishes} />
        </div>
      </div>
      <div className="budgetBoard">
        <Budgets />
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <Collectables />
        </div>
        <div className="col-8">
          <Goals />
        </div>
      </div>
    </div>
  );
}

OverviewBoard.propTypes = {
  data: PropTypes.object,
  wishes: PropTypes.array
};

export default OverviewBoard;
