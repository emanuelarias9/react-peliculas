import React, { useEffect } from "react";
import PropTypes from "prop-types";
const tituloComponente = "Editar Pelicula";
export const Editar = ({
  pelicula: { id, title, description },
  getPeliculas,
  setEditar,
  setListadoState,
}) => {
  const ActualizarPelicula = (e, id) => {
    e.preventDefault();
    let peliculasAlmacenadas = getPeliculas();
    let index = peliculasAlmacenadas.findIndex((peli) => peli.id === id);
    let peliculaEditada = {
      id,
      title: e.target.tituloEditar.value,
      description: e.target.descripcionEditar.value,
    };
    peliculasAlmacenadas[index] = peliculaEditada;
    localStorage.setItem("peliculas", JSON.stringify(peliculasAlmacenadas));
    setListadoState(peliculasAlmacenadas);
    setEditar(0);
  };

  return (
    <div className="editForm">
      <h3 className="title"> {tituloComponente} </h3>
      <form onSubmit={(e) => ActualizarPelicula(e, id)}>
        <input
          type="text"
          name="tituloEditar"
          className="tituloEditado"
          defaultValue={title}
        />
        <textarea
          name="descripcionEditar"
          className="descripcionEditada"
          defaultValue={description}
        />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};
Editar.propTypes = {
  pelicula: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
