import React from "react";
import sampleFilms from "../resources/data/films.json";
import Film from "./film";
import FilmModel from "./utils/Film.model";

const WhatsOn = (props) => {
  const films = sampleFilms.films.map((currentFilm) => {
    const film = new FilmModel(
      currentFilm.title,
      currentFilm.shortname,
      currentFilm.synopsis,
      currentFilm.id,
      currentFilm.agecert
    );
    return <Film film={film} key={film.id} />;
  });

  return <div>In Progress...</div>;
};

export default WhatsOn;
