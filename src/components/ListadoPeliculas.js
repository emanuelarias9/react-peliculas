import { useEffect, useState } from "react";
import React from "react";
import { Editar } from "./Editar";

export const ListadoPeliculas = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    GetPeliculas();
  }, []); // Se ejecuta solo al montar el componente

  const GetPeliculas = () => {
    let items = JSON.parse(localStorage.getItem("peliculas"));
    setListadoState(items);
    return items;
  };
  const Eliminar = (id) => {
    let peliculasAlmacenadas = GetPeliculas();
    let newPeliculasAlmacenadas = peliculasAlmacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );
    setListadoState(newPeliculasAlmacenadas);
    localStorage.setItem("peliculas", JSON.stringify(newPeliculasAlmacenadas));
  };
  return (
    <>
      {listadoState != null ? (
        listadoState.map((pelicula) => {
          return (
            <article key={pelicula.id} className="peli-item">
              <h3 className="title">{pelicula.title}</h3>
              <p className="description">{pelicula.description}</p>

              <button
                className="edit"
                onClick={() => {
                  setEditar(pelicula.id);
                }}
              >
                Editar
              </button>
              <button className="delete" onClick={() => Eliminar(pelicula.id)}>
                Borrar
              </button>
              {editar === pelicula.id && (
                <Editar
                  pelicula={pelicula}
                  getPeliculas={GetPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
