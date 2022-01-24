import React from 'react';
import './budgets.scss';

function Budgets() {
  return (
    <div className="budgetBoard--overview  mb-4">
      <div
        className="quick_wrap"
        style={{
          display: 'grid',
          gridGap: '30px',
          gridTemplateColumns: 'repeat(2,1fr)',
          marginBottom: '30px'
        }}>
        <div className="budgetBoard--budget-single">
          <h4 className="mb-0">Total Income:</h4>
          <div className="income">
            <p className="income_total">$3,200.00</p>

            <p className="income_remaining small">Remaining Income: $1800/$3200</p>
          </div>
        </div>

        <div className="budgetBoard--budget-single">
          <h4 className="mb-0">Total Expenses:</h4>
          <div className="expense">
            <p className="expense_total">$2,200.00</p>
          </div>
        </div>

        <div className="budgetBoard--budget-single">
          <h4 className="mb-0">Next Bill:</h4>
          <div className="upcoming">
            <p className="upcoming_bill">Spotify ($19.99)</p>
          </div>
        </div>

        <div className="budgetBoard--budget-leftover">
          <h4 className="mb-0">LeftOvers:</h4>
          <div className="leftover">
            <p className="leftover_total">$2,200.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budgets;
