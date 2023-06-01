import React from "react";

import Catagories from "../Catagories/Catagories";
import HomeBanner from "../HomeBanner/HomeBanner";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Catagories></Catagories>
      <Featured></Featured>
    </div>
  );
};

export default Home;
