import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Frontend Developer & UX Designer</h4>
                <h5>Elite Software (Remote)</h5>
              </div>
              <h3>Jan 2026 – Jul 2026</h3>
            </div>
            <p>
              • Delivered project-based frontend and UX work from brief to handover, turning written requirements into wireframes and responsive, animated interfaces.<br />
              • Kept layouts consistent across desktop and mobile, and tested every interface across devices and browsers before delivery.<br />
              • Managed several project deadlines at once, shared regular progress updates, and revised designs based on team feedback.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML & AI Engineer Intern Assignment</h4>
                <h5>DareXAI</h5>
              </div>
              <h3>Mar 2026</h3>
            </div>
            <p>
              • Built a conversational outfit recommender combining FAISS vector retrieval, FashionCLIP multimodal image/text similarity, and stylist-curated scoring rules in Streamlit.<br />
              • Engineered graceful degradation across CLIP/offline embedding backends and rule-based intent parsing with zero GPU or API key overhead.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>D.Y. Patil College of Engineering, Akurdi, Pune</h5>
              </div>
              <h3>2022 – 2026</h3>
            </div>
            <p>
              Cumulative GPA: 8.2 / 10. Rigorous coursework in Data Structures, Algorithms in C++, Relational Databases (SQL), Data Analysis, Operating Systems, Machine Learning, and Computer Networks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Certifications</h4>
                <h5>NVIDIA & 100xDevs</h5>
              </div>
              <h3>2024 – 2025</h3>
            </div>
            <p>
              • Fundamentals of Deep Learning — NVIDIA (Mar 2025)<br />
              • MERN Stack Development — 100xDevs (Dec 2024)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
