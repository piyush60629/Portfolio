import edu_image from "../assets/education.gif";

const Education = () => {
  return (
    <>
      <div className="p-6 mt-4">
        <h1 className="text-6xl orbitron mb-4 flex flex-1 justify-center items-center">Education</h1>
        <div className="flex flex-1 max-sm:flex-col justify-evenly items-center">
        <div>
          <img src={edu_image} width={400} alt="" />
        </div>
        <div className="mb-8">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Manav Rachna International Institute of Research and Studies
            </h3>
            <p>Aug 2020 – June 2024</p>
            <p>B. Tech in Computer Science & Engineering (Ongoing) 7.86 CGPA</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Tyagi Public School</h3>
            <p>March 2018 – March 2020</p>
            <p>Class 12th - 85%</p>
            <p>Class 10th - 92%</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Education;
