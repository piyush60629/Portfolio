import comp_icon from "../assets/vlogger.gif";

const Experience = () => {
  return (
    <section id="experience">
    <div className="p-4">
      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-6xl font-bold mb-4 orbitron">Experience</h1>
      </div>
      <div className="mb-8 flex flex-1 container justify-center items-center max-sm:flex-col">
        <div className="">
          <img src={comp_icon} width={460} alt="" />
        </div>
        <div>
          <div className="mb-4">
            <h3 className="text-lg palanquin-semibold">
              Manav Rachna Innovation and Incubation Centre (MRIIC)
            </h3>
            <p className="text-gray-600 palanquin-light">Jan 2024 - Present</p>
            <p className="text-gray-600 montserrat">Software Engineer Intern</p>
            <ul className="list-disc ml-6 ">
              <li>
                Trained extensively in full stack development, created "Book My
                Seat," a web app for reserving institute seats.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg palanquin-semibold">
              BRAIN O VISION PVT LTD
            </h3>
            <p className="text-gray-600 palanquin-light ">
              July 2022 - Aug 2022
            </p>
            <p className="text-gray-600 montserrat">Web Developer Intern</p>
            <ul className="list-disc ml-6">
              <li>
                Worked with colleagues in front-end development using HTML and
                CSS.
              </li>
              <li>
                Developed a strong understanding of responsive design principles
                and best practices for user experience.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg palanquin-semibold">
              THE SPARKS FOUNDATION
            </h3>
            <p className="text-gray-600 palanquin-light ">
              Dec 2021 - Jan 2022
            </p>
            <p className="text-gray-600 montserrat">
              Data Science and Business Analytic Intern
            </p>
            <ul className="list-disc ml-6">
              <li>
                Developed proficiency in data collection, preprocessing,
                advanced analytics, and visualization techniques.
              </li>
              <li>
                Acquired hands-on experience in data analysis and machine
                learning techniques.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Experience;
