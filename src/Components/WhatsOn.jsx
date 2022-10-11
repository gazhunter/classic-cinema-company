import React from "react";
import sampleFilms from "../resources/data/films.json";
import FilmModel from "./utils/Film.model";
import WhatsOnFilm from "./WhatsOnFilm";

const WhatsOn = (props) => {
  const films = sampleFilms.films.map((currentFilm) => {
    return new FilmModel(
      currentFilm.title,
      currentFilm.shortname,
      currentFilm.synopsis,
      currentFilm.id,
      currentFilm.agecert,
      currentFilm.whatsOnSrcset.small
    );
  });

  const populateFilms = () => {
    if (films?.length > 0) {
      return films.map((film) => {
        return <WhatsOnFilm film={film} key={film.id} />;
      });
    }
  };

  return <div>{populateFilms()}</div>;
};

export default WhatsOn;
