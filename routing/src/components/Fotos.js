import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Fotos = () => {
  return (
    <div>
      <h2>Fotos</h2>
      <Link to="/foto/1">Foto 1</Link>
      <br />
      <Link to="/foto/2">Foto 2</Link>
    </div>
  );
};

export default Fotos;
