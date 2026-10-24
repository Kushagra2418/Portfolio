import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container section-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          {/* Column 1: Contact Info */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:kushagrajainaj2003@gmail.com" data-cursor="disable">
                kushagrajainaj2003@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916388943930" data-cursor="disable">
                +91 63889 43930
              </a>
            </p>
            <h4>Location</h4>
            <p>Pune, Maharashtra, India</p>
          </div>

          {/* Column 2: Social Links */}
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Kushagra2418"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kushagra-jain-957300259"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="mailto:kushagrajainaj2003@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>

          {/* Column 3: Resume Download Option */}
          <div className="contact-box">
            <h4>Resume</h4>
            <p className="contact-resume-sub">Download verified resumes</p>
            <div className="contact-resume-group">
              <a
                href="/Kushagra_Jain_AI_Engineer_Resume.pdf"
                download="Kushagra_Jain_AI_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-resume-btn"
                data-cursor="disable"
              >
                <FiDownload />
                <span>AI Engineer Resume</span>
              </a>
              <a
                href="/Kushagra_Jain_Business_Analyst_Resume.pdf"
                download="Kushagra_Jain_Business_Analyst_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-resume-btn secondary"
                data-cursor="disable"
              >
                <FiDownload />
                <span>Business Analyst Resume</span>
              </a>
            </div>
          </div>

          {/* Column 4: Credits & Copyright */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kushagra Jain</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
