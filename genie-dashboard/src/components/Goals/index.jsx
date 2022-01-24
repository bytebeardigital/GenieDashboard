import React from 'react';
import './goals.scss';

function Goals() {
  return (
    <div className="goals--overview">
      <h4 className="overview--heading">Goals:</h4>
      <div className="goals--list">
        <p className="goal">Run a half-marathon</p>
        <p className="goal">Read 2 books a quarter</p>
        <p className="goal">Run a half-marathon</p>
      </div>
    </div>
  );
}

export default Goals;
