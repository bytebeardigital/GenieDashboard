import React from 'react';
import Wishes from '../../components/Wishes';
import Budgets from '../../components/Budgets';
import Collectables from '../../components/Collectables';
import PropTypes from 'prop-types';
import Goals from '../../components/Goals';
function OverviewBoard({ data }) {
  if (!data) return null;
  let userData = data;

  let wishData = userData.filter((wish) => {
    if (wish.wishes) {
      return wish.wishes;
    } else null;
  });

  let collectionData = userData.filter((data) => {
    if (data.collectables) {
      return (data.collectables = 'collectables');
    } else null;
  });

  let goalsData = userData.filter((data) => {
    if (data.goals) {
      return (data.goals = 'goals');
    } else null;
  });

  let financeData = userData.filter((data) => {
    if (data.finances) {
      return (data.finances = 'finances');
    } else null;
  });

  return (
    <div className="adminBoard">
      <div className="container-fluid wishesBoard--list mb-4">
        <div className="row justify-content-center">
          <Wishes wishes={wishData} />
        </div>
      </div>
      <div className="budgetBoard">
        <Budgets data={financeData} />
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <Collectables data={collectionData} />
        </div>
        <div className="col-8">
          <Goals data={goalsData} />
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
