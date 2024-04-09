const Projects = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Holidify Review Scrapper</h3>
        <p>Python, Flask, HTML, CSS, BeautifulSoup, Requests</p>
        <ul className="list-disc ml-6">
          <li>Built Holidify Review Scraper: Developed a web scraping tool in Python using BeautifulSoup and Requests to extract Holidify user reviews.</li>
          <li>Added Search Functionality: Enhanced user experience by integrating search features, enabling targeted searches within reviews.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Network Intrusion Detection System (NIDS)</h3>
        <p>Python, Flask, Pandas, NumPy, Scikit-learn, Git</p>
        <ul className="list-disc ml-6">
          <li>Network Security Enhancement: Led NIDS development with real-time monitoring and diverse ML algorithms for detecting and responding to threats.</li>
          <li>Utilized NSL-KDD Dataset: Enhanced NIDS with NSL-KDD dataset, ensuring robust intrusion detection.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Face Counting</h3>
        <p>Python, OpenCV, Haar Cascade Classifier</p>
        <ul className="list-disc ml-6">
          <li>Real-Time Face Counting: Developed Python application using OpenCV for real-time face counting from webcam feeds.</li>
          <li>User-Friendly Interface: Designed simple interface for viewing webcam feeds and counted faces. Demonstrated proficiency in creating intuitive user experiences.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
