import React from "react";

const Contador = ({ users }) => {
  return <span class="badge badge-primary">{users.length}</span>;
};

export default Contador;
