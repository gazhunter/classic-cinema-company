import React from "react";
import "./css/AllTodos.css";
import sampleFilms from "../resources/data/films.json";
import Film from "./film";
import FilmModel from "./utils/Film.model";

const AllFilms = () => {
  const films = sampleFilms.films.map((currentFilm) => {
    const film = new FilmModel(
      currentFilm.title,
      currentFilm.shortname,
      currentFilm.synopsis,
      currentFilm.id,
      currentFilm.agecert,
      currentFilm.nowShowingSrcset.small
    );
    return <Film film={film} key={film.id} />;
  });
  return (
    <div className="row">
      <h3>Film List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Short Name</th>
            <th>Synopsys</th>
            <th>id</th>
            <th>Age Cert</th>
          </tr>
        </thead>
        <tbody>{films}</tbody>
      </table>
    </div>
  );
};

export default AllFilms;
