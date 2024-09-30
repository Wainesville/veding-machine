import React from "react";
import { Link } from "react-router-dom";

function Snack3() {
  return (
    <div className="Snack">
      <h1>You chose Gummy Worms!</h1>
      <img
        src="https://m.media-amazon.com/images/I/61XX7dHxQ-L._UX250_.jpg"
        alt="Gummys"
      />
      {/* Link to go back to the vending machine */}
      <Link to="/">Go back to the Vending Machine</Link>
    </div>
  );
}

export default Snack3;
