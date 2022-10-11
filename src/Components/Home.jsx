import React from "react";
import NowShowing from "./NowShowing";
import HomePageText from "./HomePageText";

const Home = () => {
  return (
    <div className="container">
      <HomePageText />
      <NowShowing />
    </div>
  );
};

export default Home;
