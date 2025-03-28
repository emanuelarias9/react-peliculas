import React, { useState } from "react";

export const ConsultaPeliculas = ({ listadoState, setListadoState }) => {
  const [busquedaState, setBusquedaState] = useState("");
  const [notFound, setNotFound] = useState(false);
  const BuscarPelicula = (e) => {
    setBusquedaState(e.target.value);
    let peliculasEncontradas = listadoState.filter((peli) => {
      return peli.title.toLowerCase().includes(busquedaState.toLowerCase());
    });
    console.log(peliculasEncontradas);
    if (busquedaState.length <= 1 || peliculasEncontradas <= 0) {
      peliculasEncontradas = JSON.parse(localStorage.getItem("peliculas"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setListadoState(peliculasEncontradas);
  };
  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      {notFound && busquedaState.length > 2 && (
        <span className="notFound">
          No se ha encontrado ninguna coincidencia
        </span>
      )}

      <form>
        <input
          type="text"
          id="searchField"
          name="busqueda"
          autoComplete="off"
          onChange={BuscarPelicula}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
