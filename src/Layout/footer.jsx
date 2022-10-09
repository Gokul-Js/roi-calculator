import React from "react";
import "./footer.css";
import { BsDot } from "react-icons/bs";

const footer = () => {
  return (
    <>
      <div className="text1">APY</div>

      <div className="text2">63.34%</div>

      <div className="text3">
        <BsDot />
        Calculated Based on Current Rates
      </div>

      <div className="text4">
       <BsDot />All fugures are estimates provide for your convinence only, <span className="line">and by no
        means represent gurranted returns</span>
      </div>
    </>
  );
};

export default footer;
