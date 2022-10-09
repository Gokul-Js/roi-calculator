import React from "react";
import "./Home.css";
import Rectangle from "../assets/Rectangle.png"
import Rectangle1 from "../assets/Rectangle1.png"
import Cake from "../assets/cake.png";
import { AiOutlineClose } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <icon className="cross">
        <AiOutlineClose />
      </icon>
      <div className="header">ROI Calculator</div>
    </>
  );
};

const Icon = () => {
  return (
    <>
      <div className="cake">
        <img src={Cake} alt="" className="cake-icon" />
        <div className="cake-text">Cake</div>
      </div>
    </>
  );
};

const Tile = () => {
  return (
    <div>
      <div className="button-9">
        <div className="text-btn9">Tier 1</div>
      </div>

      <div className="button-10">
        <div className="text-btn10">Tier 2</div>
      </div>

      <div className="button-11">
        <div className="text-btn11">Tier 3</div>
      </div>

      <div className="button-12">
        <div className="text-btn12">Tier 4</div>
      </div>

      <div className="button-13">
        <div className="text-btn13">Tier 5</div>
      </div>
    </div>
  );
};

const Toogleon = () => {
  return (
    <div >
      <img src={Rectangle} alt="" className="t1" />
         <img src={Rectangle1} alt="" className="t-icon1" />
      </div>
  )
}

const Home = () => {
  return (
    <div>
      <Header />
      <Icon />

      <div className="usd">
        <div>USD</div>
      </div>

      <div className="container"></div>
      <div className="container-text">2.10000 CAKE</div>

      <div className="button-1">
        <div className="text-btn1">USE BALANCE</div>
      </div>

      <div className="button-2">
        <div className="text-btn2">$1000</div>
      </div>

      <div className="button-3">
        <div className="text-btn3">$100</div>
      </div>
      <div className="txt">~$20.82</div>

      <div className="txt1">Timeframe</div>
      
      <div className="txt2">Enable Accelerated APY</div>
      
      <div><Toogleon /></div>

      <div className="txt3">Select Tier</div>

      <div>
        <Tile />
      </div>
      <div className="txt4">ROI at Current Rates</div>

      <div className="container-1">
        <div className="pencil">
          <BsPencil />
        </div>
      </div>
      <div className="container-text1">100.0 USD</div>

      <div className="txt5">~3CAKE + 10 DON</div>

      <div className="apply">Apply</div>

      <div className="cancel">Cancel</div>

      <div className="txt6">
        Hide
        <div>
          <span className="details"> details</span>
        </div>
        <div>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Home;
