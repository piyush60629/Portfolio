import skill_image from "../assets/wired-gradient-680-it-developer.gif";

const TechnicalSkills = () => {
  return (
    <section id="technicalskills">
    <div className="p-6 mt-4 bg-black text-white">
      <h1 className="text-6xl orbitron flex flex-1 justify-center items-center ">
        Technical Skills
      </h1>
      <div className="flex flex-1 justify-evenly items-center max-sm:flex-col-reverse">
        <div>
          <h1 className="flex flex-1 justify-center pb-2 text-2xl poppins-semibold">
            Languages
          </h1>
          <hr />
          <br />
          <div className="flex flex-1 justify-evenly cursor-pointer">
            <p className="montserrat">Python</p>
            <p className="montserrat">C++</p>
            <p className="montserrat">HTML</p>
            <p className="montserrat">CSS</p>
            <p className="montserrat">JavaScript</p>
            <p className="montserrat">SQL</p>
          </div>
          <br />
          <hr />
          <br />
          <h1 className=" mt-6 flex justify-center text-2xl pb-2 poppins-semibold">
            Technologies/Frameworks/Libraries
          </h1>
          <hr />
          <br />
          <div className="flex flex-col flex-1 justify-center cursor-pointer">
            <div className="flex flex-row flex-1 justify-evenly cursor-pointer">
              <p className="montserrat">Beautifulsoup</p>
              <p className="montserrat">Numpy</p>
              <p className="montserrat">Matplotlib</p>
              <p className="montserrat">Pandas</p>
            </div>
            <div className="flex flex-row flex-1 justify-evenly cursor-pointer">
              <p className="montserrat">Seaborn</p>
              <p className="montserrat">Tensorflow</p>
              <p className="montserrat">Scikit</p>
              <p className="montserrat">NLTK</p>
            </div>
          </div>
          <br />
          <hr />
        </div>
        <div>
          <img src={skill_image} width={400} alt="" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default TechnicalSkills;
