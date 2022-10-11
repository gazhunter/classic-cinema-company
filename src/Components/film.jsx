import React from "react";
import PropTypes from "prop-types";
//import TodoModel from './utils/Film.model';
import FilmModel from "./utils/Film.model";

const Film = ({ film }) => {
  return (
    <tr>
      <td>{film.title}</td>
      <td>{film.shortName}</td>
      <td>{film.synopsys}</td>
      <td>{film.id}</td>
      <td>{film.agecert}</td>
    </tr>
  );
};

Film.propTypes = {
  film: PropTypes.instanceOf(FilmModel),
};

export default Film;
