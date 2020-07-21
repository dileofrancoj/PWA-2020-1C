import React, { Fragment, useState } from "react";
import Error from "./Error";
const Presupuesto = ({ setPresupuesto }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const handler = (e) => {
    setCantidad(parseFloat(e.target.value));
  };
  const submit = (e) => {
    e.preventDefault();
    // Validar mi presupuesto
    if (cantidad <= 0 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setPresupuesto(cantidad);
    // mensaje presupuesto aprobado
  };
  return (
    <Fragment>
      <h2>Colocá tu Presupuesto</h2>
      {error ? <Error error="El presupuesto es invalido" /> : null}
      <form onSubmit={submit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Presupuesto disponible"
            className="form-control"
            onChange={handler}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Validar
        </button>
      </form>
    </Fragment>
  );
};

export default Presupuesto;
