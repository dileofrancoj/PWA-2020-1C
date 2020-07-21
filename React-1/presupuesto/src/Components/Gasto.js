import React from "react";

const Gasto = ({ gastos }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Detalle</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map((gasto) => (
            <tr key={gasto.id}>
              <td>{gasto.detalle}</td>
              <td>${gasto.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gasto;
