import React, { Fragment, useState } from "react";
const Presupuesto = () => {
  const [cantidad, setCantidad] = useState(0);
  const handler = (e) => {
    setCantidad(parseFloat(e.target.value));
  };
  const submit = (e) => {
    e.preventDefault();
    // Validar mi presupuesto
    console.log(cantidad);
    if (cantidad <= 0 || isNaN(cantidad)) {
      console.log("Invalido");
      return;
    }
    console.log("Submit event");
    // mensaje presupuesto aprobado
  };
  return (
    <Fragment>
      <h2>Colocá tu Presupuesto</h2>
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
