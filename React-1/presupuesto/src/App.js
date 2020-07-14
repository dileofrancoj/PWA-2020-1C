import React, { useState } from "react";
import Header from "./Components/Header";
import Presupuesto from "./Components/Presupuesto";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid">
      <Header nombre="Header 🔥" />
      <div className="row justify-content-center">
        <div className="col-4">
          <Presupuesto />
        </div>
      </div>
    </div>
  );
};

export default App;
