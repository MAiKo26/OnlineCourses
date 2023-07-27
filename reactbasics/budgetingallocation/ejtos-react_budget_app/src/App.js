import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import AllocationForm from "./components/AllocationForm";
import Currency from "./components/Currency";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";

// Add code to import the other components here under

import { AppProvider } from "./context/AppContext";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <Budget />
          <Remaining />
          <ExpenseTotal />
          <Currency />
          <ExpenseList />
          <AllocationForm />
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
