import React from "react";
import PropTypes from "prop-types";
import FilmModel from "./utils/Film.model";

const WhatsOnFilm = ({ film }) => {
  return (
    <div className="whatsOnCard">
      <h4>{film.title}</h4>
      <p>{film.agecert}</p>
      <img
        src={process.env.PUBLIC_URL + `/films/${film.smallThumb}`}
        alt={film.title}
      />
      <p>{film.synopsys}</p>
    </div>
  );
};

WhatsOnFilm.propTypes = {
  film: PropTypes.instanceOf(FilmModel),
};

export default WhatsOnFilm;
