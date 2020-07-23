// Mostrar todos los gastos
import React from "react";
import Gasto from "./Gasto";
const Listar = ({ gastos, eliminar }) => {
  return (
    <div>
      <h4>Mis gastos</h4>
      <Gasto gastos={gastos} eliminar={eliminar} />
    </div>
  );
};
export default Listar;
