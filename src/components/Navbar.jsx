import logo from "../assets/LogoPorftolioApesteySantiago.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex item-center justify-between py-6">
    <div className="flex flex-shrink-0 item-center">
        <img 
          width={150}
          height={150}
          src={logo} 
          alt="logo" 
        />
    </div>
    <div className="m-8 flex item-center justify-center gap-4 texr-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
    </div>
  </nav>;
};

export default Navbar