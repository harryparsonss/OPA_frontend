import { motion } from "framer-motion";
import { React, useState } from "react";
import contactImage from "../images/contactpage.jpg";
import "../Styles/contact.css";

function Contact() {
  const [isLoaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <motion.div
      className="c-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      {!isLoaded && <div>Loading...</div>}
      <div className="c-title">Contact</div>
      <div className="c-container">
        <div className="image">
          <img
            src={contactImage}
            alt={"contactImage"}
            onLoad={handleImageLoad}
          />
        </div>
        {isLoaded && (
          <div className="text-icons">
            <div className="text">
              Contact me for enquiries, commissions or collaborations via email
              or instagram:
              <br />
              <br />
              Email:{" "}
              <a
                href="mailto:oliviaparsonsart@gmail.com"
                className="emailhandle"
              >
                oliviaparsonsart@gmail.com
              </a>
              <br />
              <br />
              Instagram:{" "}
              <a
                href="https://www.instagram.com/olivia_parsons_art/?hl=en-gb"
                className="instahandle"
                target="_blank"
                rel="noreferrer"
              >
                @olivia_parsons_art
              </a>
            </div>

            <div className="info">
              {/* <a href="https://www.instagram.com/olivia_parsons_art/?hl=en-gb" target="_blank"  rel="noreferrer"><FaInstagram className="insta"/> </a>
                 <a href="mailto:oliviaparsonsart@gmail.com"><FaEnvelope className="email"/></a> */}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Contact;
