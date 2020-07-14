import React from "react";

const Header = ({ nombre }) => {
  const styles = {
    backgroundColor: "tomato",
    opacity: 0.8,
    margin: "1em",
    padding: "1em",
    borderRadius: ".5em",
  };
  return (
    <div className="row justify-content-center" style={styles}>
      <div className="col-12">
        <h1 className="text-center text-white">{nombre}</h1>
      </div>
    </div>
  );
};

export default Header;
