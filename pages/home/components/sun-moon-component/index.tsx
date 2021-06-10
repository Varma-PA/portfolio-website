import React from "react";
import MoonPicture from "../../../../components/icons/moon-picture";

const SunMoon = () => {
  return (
    <div>
      <div className="moon-container">
        <div className="moon">
          <MoonPicture height={250} width={250} />
        </div>
      </div>
    </div>
  );
};

export default SunMoon;
