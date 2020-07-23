import React from "react";

const Foto = ({ match }) => {
  // console.log(props)
  const { id } = match.params;
  return (
    <div>
      <h2>Foto {id}</h2>
    </div>
  );
};

export default Foto;
