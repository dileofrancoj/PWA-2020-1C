import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
const Formulario = ({ setGastos, agregarNuevo }) => {
  const [detalle, setDetalle] = useState("");
  const [monto, setMonto] = useState(0);
  const [error, setError] = useState(false);

  const agregar = (e) => {
    e.preventDefault(); // evita el envio del form al servidor
    if (monto <= 0 || isNaN(monto) || detalle.trim() == "") {
      setError(true);
      return;
    }
    setError(false);
    const gasto = {
      detalle,
      monto,
      id: shortid.generate(),
    };
    setGastos(gasto);
    agregarNuevo(gasto);
    setDetalle("");
    setMonto(0);
  };
  return (
    <div>
      <h4>Detalle Presupuesto</h4>
      {error ? <Error error="Gasto invalido" /> : null}
      <form onSubmit={agregar}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Detalle"
            onChange={(e) => setDetalle(e.target.value)}
            value={detalle}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="$100"
            onChange={(e) => setMonto(parseFloat(e.target.value))}
            value={monto}
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Agregar gasto
        </button>
      </form>
    </div>
  );
};

export default Formulario;
