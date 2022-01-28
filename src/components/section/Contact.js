import React from "react";
import { contact, section5Title, social } from "../../profile";

const Contact = () => {
  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form
                action={
                  contact.contactUrl
                    ? contact.contactUrl
                    : "https://formspree.io/f/myyoegvv"
                }
                // method={contact.contactUrl ? "POST" : "GET"}
                method="POST"
              >
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Votre Nom"
                  required
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Votre Email"
                  required
                ></input>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Objet"
                  required
                ></input>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button style={{ cursor: "pointer" }} type="submit">
                  Envoyer le Message
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <br />
                </div>
                {social.resume && (
                  <a title="Download Resume" href={social.resume} download>
                    <i className="fas fa-download"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;