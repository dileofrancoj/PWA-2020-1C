import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Fotos from "./components/Fotos";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import Foto from "./components/Foto";
import Axios from "axios";

const navStyles = {
  display: "flex",
  justifyContent: "space-around",
};

const activeNav = {
  color: "orangered",
};

const Navigation = () => {
  return (
    <nav style={navStyles}>
      <NavLink activeStyle={activeNav} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={activeNav} to="/contacto">
        Contacto
      </NavLink>
      <NavLink activeStyle={activeNav} to="/fotos">
        Fotos
      </NavLink>
    </nav>
  );
};

function App() {
  const [characters, setCharacters] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log(BASE_URL);
  const url = "https://rickandmortyapi.com/api/character/";
  useEffect(() => {
    Axios.get(url)
      .then((response) => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact render={Home} />
        <Route path="/contacto" render={Contacto} />
        <Route path="/fotos" render={Fotos} />
        <Route path="/foto/:id" render={Foto} />
      </BrowserRouter>
    </div>
  );
}

export default App;
