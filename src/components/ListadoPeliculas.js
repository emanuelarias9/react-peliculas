import React from "react";

export const ListadoPeliculas = () => {
  return (
    <>
      <article className="peli-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description"></p>

        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
    </>
  );
};
