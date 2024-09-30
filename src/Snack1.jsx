import React from "react";
import { Link } from "react-router-dom";

function Snack1() {
  return (
    <div className="Snack">
      <h1>You chose Chips!</h1>
      <img
        src="https://m.media-amazon.com/images/I/8141nrQe0aL.jpg"
        alt="Chips"
      />
      {/* Link to go back to the vending machine */}
      <Link to="/">Go back to the Vending Machine</Link>
    </div>
  );
}

export default Snack1;
