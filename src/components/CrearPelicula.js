import React, { useState } from "react";

export const CrearPelicula = () => {
  const tituloComponent = "Crear Pelicula";
  const [peliculaState, setPeliculaState] = useState({
    title: "",
    description: "",
  });
  const { title, description } = peliculaState;
  const obtenerDatosForm = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    let pelicula = {
      id: new Date().getTime(),
      title,
      description,
    };
    setPeliculaState(pelicula);
    saveOnLocalStorage(pelicula);
  };

  const saveOnLocalStorage = (pelicula) => {
    let items = JSON.parse(localStorage.getItem("peliculas"));
    if (Array.isArray(items)) {
      items.push(pelicula);
    } else {
      items = [pelicula];
    }
    localStorage.setItem("peliculas", JSON.stringify(items));
    console.log(items);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponent}</h3>
      <strong>
        {title && description && "Has creado la pelicula: " + title}
      </strong>

      <form onSubmit={obtenerDatosForm}>
        <input type="text" id="title" name="title" placeholder="Titulo" />
        <textarea
          id="description"
          name="description"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" name="guardar" value="Guardar" />
      </form>
    </div>
  );
};
