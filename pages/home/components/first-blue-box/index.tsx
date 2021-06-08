import React from "react";
import Moon from "../../../../components/icons/moon-picture";

const FirstBox = () => {
  return (
    <div className="firstbluebox-inside">
      <div>
        <h2>Namaste</h2>
      </div>
      <div className="moon">
        <Moon height={250} />
      </div>
    </div>
  );
};

export default FirstBox;
