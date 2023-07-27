import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  const [cost, setCost] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const submitEvent = (X) => {
    if (cost > 20000) {
      alert("Error , Budget can't be more than 20000");
      setCost(budget);
    }
    if (totalExpenses > cost) {
      alert("Error , Budget can't be lower than total expenses");
      setCost(budget);
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: parseInt(X),
      });
    }
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          required="required"
          type="number"
          id="budget"
          step="10"
          value={cost}
          style={{ marginLeft: "0rem", size: 10 }}
          onChange={(event) => setCost(event.target.value)}
          onBlur={(event) => submitEvent(event.target.value)}
        ></input>
      </span>
    </div>
  );
};
export default Budget;
