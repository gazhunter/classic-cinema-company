import React from "react";
import AllFilms from "./AllFilms";
import NowShowing from "./NowShowing";
import HomePageText from "./HomePageText";

const Home = () => {
  return (
    <div className="container">
      <AllFilms/>
      <HomePageText />
      <NowShowing />
    </div>
  );
};

export default Home;
