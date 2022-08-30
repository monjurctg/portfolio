import React, { useRef } from "react";
// import "./Contact.css";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_apsi09r",
        form.current,
        "user_qtssIDmLJMZeoVOE5mCEH"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section
        className="contact"
        id="contact"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <h1 className="heading">
          {" "}
          <span className="text-warning">contact</span> me{" "}
        </h1>

        <div className="row">
          <div className="content">
            <h3 className="title">contact info</h3>
            <div className="info">
              <h3>
                {" "}
                <i className="fas fa-envelope"></i> monjur.ctg53@gmail.com{" "}
              </h3>
              <h3>
                {" "}
                <i className="fas fa-phone"></i> +880-1829-940853{" "}
              </h3>
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Rangonia,
                Chittagong,Bangladesh.{" "}
              </h3>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="name" name="name" className="box" />
            <input
              type="email"
              placeholder="email"
              name="email"
              className="box"
            />
            <input
              type="text"
              placeholder="subject"
              name="subject"
              className="box"
            />
            <textarea
              id=""
              cols="30"
              rows="10"
              className="box message"
              placeholder="message"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="btn   text-white gradient-button-2 gradient-button"
            >
              {" "}
              send <i className="fas fa-paper-plane"></i>{" "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
