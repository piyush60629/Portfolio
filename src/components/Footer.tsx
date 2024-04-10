import footerlogo from "../assets/cv.png";
import copyrightsign from "../assets/copyright-sign.svg"

const Footer = () => {
  return (
    <footer className="bg-black p-4 text-white">
      <hr />
      <div className="p-2 flex flex-1 mt-6 max-sm:flex-col ">
        <img className=" max-sm:w-20 max-sm:hidden" src={footerlogo} alt="" />
        <div className="flex flex-1 justify-evenly items-center orbitron text-lg">
            <a href="">Profile</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#technicalskills">Skills</a>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={copyrightsign} alt="" />
        Copyright. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
