import React from "react";
import FirstBlueBox from "./components/first-blue-box";
import SunMoon from "./components/sun-moon-component";

const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage_blue-box initial">
        <FirstBlueBox />
      </div>
      <div>
        <SunMoon />
      </div>
      <div className="homepage_blue-box__inverted"></div>
      <div className="homepage_blue-box"></div>
    </div>
  );
};

export default Home;
