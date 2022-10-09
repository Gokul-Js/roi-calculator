import "./toogle.css";
import Background from "../assets/Background.png";
import Knob from "../assets/Knob.png"



const Toogle = () => {
  return (
    <div>
         <img src={Background} alt="" className="t" />
         <img src={Knob} alt="" className="t-icon" />
    </div>
  )
}

export default Toogle