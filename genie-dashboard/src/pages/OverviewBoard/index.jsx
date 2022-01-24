import React from 'react';
import Wishes from '../../components/Wishes';
import Budgets from '../../components/Budgets';
import Collectables from '../../components/Collectables';
import Goals from '../../components/Goals';
function OverviewBoard() {
  return (
    <div className="adminBoard">
      <div className="container-fluid wishesBoard--list mb-4">
        <div className="row justify-content-center">
          <Wishes />
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

export default OverviewBoard;
