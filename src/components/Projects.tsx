import projectgif from '../assets/prog.gif'

const Projects = () => {
  return (
    <>
    <div className='bg-black text-white p-6'>
    <div>
      <h1 className="text-6xl orbitron font-bold mb-4 flex flex-1 justify-center items-center">
        Projects
      </h1>
      <div className="mb-8 flex flex-1 justify-evenly items-center max-sm:flex-col-reverse">
        <div>
          <div className="mb-4">
            <h3 className="text-lg orbitron">Holidify Review Scrapper</h3>
            <p className='palanquin-regular'>Python, Flask, HTML, CSS, BeautifulSoup, Requests</p>
            <ul className="list-disc ml-6 poppins-regular">
              <li>
                Built Holidify Review Scraper: Developed a web scraping tool in
                Python using BeautifulSoup and Requests to extract Holidify user
                reviews.
              </li>
              <li>
                Added Search Functionality: Enhanced user experience by
                integrating search features, enabling targeted searches within
                reviews.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg orbitron">
              Network Intrusion Detection System (NIDS)
            </h3>
            <p className='palanquin-regular'>Python, Flask, Pandas, NumPy, Scikit-learn, Git</p>
            <ul className="list-disc ml-6 poppins-regular">
              <li>
                Network Security Enhancement: Led NIDS development with
                real-time monitoring and diverse ML algorithms for detecting and
                responding to threats.
              </li>
              <li>
                Utilized NSL-KDD Dataset: Enhanced NIDS with NSL-KDD dataset,
                ensuring robust intrusion detection.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg orbitron">Face Counting</h3>
            <p className='palanquin-regular'>Python, OpenCV, Haar Cascade Classifier</p>
            <ul className="list-disc ml-6 poppins-regular">
              <li>
                Real-Time Face Counting: Developed Python application using
                OpenCV for real-time face counting from webcam feeds.
              </li>
              <li>
                User-Friendly Interface: Designed simple interface for viewing
                webcam feeds and counted faces. Demonstrated proficiency in
                creating intuitive user experiences.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={projectgif} alt="" />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Projects;
