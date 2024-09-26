import logo from "../assets/kevinRushLogo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div>
        <img className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/manvendrar"><FaLinkedin/></a>
        <a href="https://www.github.com/manvendra2000"><FaGithub/></a>
        <FaInstagram/>
        <a href="https://x.com/0xmannyyyy"><FaSquareXTwitter/></a>
    </div>
  </nav>
};

export default Navbar
