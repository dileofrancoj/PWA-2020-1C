import React, { useState } from "react";
import Header from "./Components/Header";
import Presupuesto from "./Components/Presupuesto";
import Formulario from "./Components/Formulario";
import Listar from "./Components/Listar";
import "./App.css";
// parseFloat
const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);

  const agregarNuevo = (gasto) => {
    setGastos([...gastos, gasto]);
    console.log(gastos);
  };
  return (
    <div className="container-fluid">
      <Header nombre="Header 🔥" />
      <div className="row justify-content-center">
        <div className="col-4">
          <Presupuesto setPresupuesto={setPresupuesto} />
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-4">
          <Formulario setGastos={setGastos} agregarNuevo={agregarNuevo} />
        </div>
        <div className="col-4">
          <Listar gastos={gastos} />
        </div>
      </div>
    </div>
  );
};

export default App;
