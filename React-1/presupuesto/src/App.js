import React, { useState } from "react";
import Header from "./Components/Header";
import Presupuesto from "./Components/Presupuesto";
import "./App.css";

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  return (
    <div className="container-fluid">
      <Header nombre="Header 🔥" />
      <div className="row justify-content-center">
        <div className="col-4">
          <Presupuesto setPresupuesto={setPresupuesto} />
        </div>
      </div>
    </div>
  );
};

export default App;
