import React from "react";
import PropTypes from "prop-types";

export const ListadoPeliculas = ({ pelicula: { title, description } }) => {
  return (
    <>
      <article className="peli-item">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>

        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
    </>
  );
};
ListadoPeliculas.propTypes = {
  pelicula: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
