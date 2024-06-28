import { GiInjustice } from "react-icons/gi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsFillTreeFill } from "react-icons/bs";
import { FaFistRaised } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";

let feature_icon = {
  fontSize: "6vw",
  color: "var(--tertiary-accented)",
};
const features = [
  {
    category: "Justice",
    icon: <GiInjustice style={feature_icon} />,
  },
  {
    category: "Responsibility",
    icon: <FaHandshakeSimple style={feature_icon} />,
  },
  {
    category: "Fairness",
    icon: <LuHeartHandshake style={feature_icon} />,
  },
  {
    category: "Privacy",
    icon: <BsShieldFillCheck style={feature_icon} />,
  },
  {
    category: "Ethics",
    icon: <BsFillTreeFill style={feature_icon} />,
  },
  {
    category: "Empowerment",
    icon: <FaFistRaised style={feature_icon} />,
  },
  {
    category: "Sustainability",
    icon: <RiPlantFill style={feature_icon} />,
  },
  {
    category: "Transparency",
    icon: <FaMagnifyingGlass style={feature_icon} />,
  },
];

export default features;
