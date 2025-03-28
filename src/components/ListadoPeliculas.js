import { useEffect, useState } from "react";
import React from "react";

export const ListadoPeliculas = ({ listadoState, setListadoState }) => {
  useEffect(() => {
    getPeliculas();
  }, []); // Se ejecuta solo al montar el componente

  const getPeliculas = () => {
    let items = JSON.parse(localStorage.getItem("peliculas"));
    setListadoState(items);
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((pelicula) => {
          return (
            <article key={pelicula.id} className="peli-item">
              <h3 className="title">{pelicula.title}</h3>
              <p className="description">{pelicula.description}</p>

              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
