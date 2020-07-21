import React, { useState, useEffect } from "react";
import Contador from "./Contador";
const Usuarios = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [usuarios, setUsuarios] = useState([]); // [{}]
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((users) => setUsuarios(users));
  }, []);
  return (
    <div className="row">
      <h2>Usuarios</h2>
      <Contador users={usuarios} />
      <table className="table">
        <thead>
          <td>Nombre</td>
          <td>Usuario</td>
          <td>Correo</td>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
