import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import VendingMachine from "./VendingMaschine";
import Snack1 from "./Snack1";
import Snack2 from "./Snack2";
import Snack3 from "./SNack3";
import './App.css'; // Optional for styling

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation link to VendingMachine */}
        <nav>
          <Link to="/">Vending Machine</Link>
        </nav>
        {/* Define the routes for the application */}
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack1" element={<Snack1 />} />
          <Route path="/snack2" element={<Snack2 />} />
          <Route path="/snack3" element={<Snack3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
