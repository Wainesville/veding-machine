import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>Welcome to the Vending Machine!</h1>
      <p>Choose a snack:</p>
      <ul>
        {/* Links to individual snack components */}
        <li><Link to="/snack1">Chips</Link></li>
        <li><Link to="/snack2">Jerky</Link></li>
        <li><Link to="/snack3">Candy</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
