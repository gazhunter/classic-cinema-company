import React from "react";
import AllFilms from "./AllFilms";
import NowShowing from "./NowShowing";

const Home = () => {
  return (
    <div className="container">
      <AllFilms/>
      <NowShowing />
    </div>
  );
};

export default Home;
