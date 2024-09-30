import React from "react";
import { Link } from "react-router-dom";

function Snack2() {
  return (
    <div className="Snack">
      <h1>You chose Jerky!</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8LmFven-3Widj309oZQ-PCC72DP_qk0NrQ&s"
        alt="Jerky"
      />
      {/* Link to go back to the vending machine */}
      <Link to="/">Go back to the Vending Machine</Link>
    </div>
  );
}

export default Snack2;
