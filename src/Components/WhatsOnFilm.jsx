import React from "react";
import PropTypes from "prop-types";
import FilmModel from "./utils/Film.model";

const WhatsOnFilm = ({ film }) => {
  return <div></div>;
};

WhatsOnFilm.propTypes = {
  film: PropTypes.instanceOf(FilmModel),
};

export default WhatsOnFilm;
