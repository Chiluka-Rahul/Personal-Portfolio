import React,{useEffect, useState} from "react";
import Swal from "sweetalert2";
import Navside from "../../components/Nav/Navside/Navside";
import {motion, AnimatePresence} from 'framer-motion'
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [isActive, setIsActive] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const access_key = process.env.REACT_APP_ACCESS_KEY
    formData.append("access_key", access_key);
    console.log(access_key)
    console.log(process.env)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setStatus("success");
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thanks for reaching out. I’ll get back to you soon.',
        timer: 3000,
        showConfirmButton: false,
      });
    } else {
      setStatus("error");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Try again later.',
      });
    }


    setTimeout(() => setStatus("idle"), 3000);
  };

  useEffect(() => {
    const heading = document.querySelector(".contact-heading");
    const options = {
      rootMargin: "-10%",
      threshold: 0.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll("span");
          spans.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.add("activee");
            }, idx * 30);
          });
        }
      });
    }, options);

    if (heading) {
      const headingText = heading.textContent.split("");
      const formattedText = headingText.map((char, idx) => {
        const span = document.createElement("span");
        if (char === " ") {
          span.className = "gapp";
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = char;
        }
        return span;
      });

      heading.textContent = "";
      formattedText.forEach((span) => heading.appendChild(span)); 
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className='headerButtonContainerr'>
            <div onClick={() => {setIsActive(!isActive)}} className='buttonn'>
                <div className={`burgerr ${isActive ? 'burgerActivee' : ""}`}>
                </div>
            </div>
      </div>
      <AnimatePresence mode="wait">
          {isActive && <Navside />}
      </AnimatePresence>
      <section className="contact-page">
          <div className="contact-heading-container">
            <div className="contact-heading">Contact Me</div>
          </div>
          <div className="contact-container">
            <form className="form-container" onSubmit={onSubmit}>
              <div className="input-container">
                <h3>Full Name</h3>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  name="fullName"
                  required
                  aria-label="Name"
                />
              </div>
              <div className="input-container">
                <h3>Email</h3>
                <input
                  className="input"
                  type="email"
                  name="email"
                  required
                  aria-label="Email"
                />
              </div>
              <div className="input-container">
                <h3>Phone Number (Optional)</h3>
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  aria-label="Phone"
                />
              </div>
              <div className="input-container">
                <h3>Message</h3>
                <textarea
                  className="text-area"
                  cols="63"
                  name="message"
                  required
                  aria-label="Message"
                ></textarea>
              </div>
              <div className="contact-button-container">
                <motion.button
                  type="submit"
                  className={`submit-btn ${
                    status === "success"
                      ? "done-btn"
                      : status === "error"
                      ? "error-btn"
                      : "normal-btn"
                  }`}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.5 } : {}}
                >
                  {status === "idle" && "Send Message"}
                  {status === "loading" && "Sending..."}
                  {status === "success" && (
                    <motion.span
                      className="done-icon"
                      initial={{ x: "100%"}}
                      animate={{ x: 0}}
                      transition={{ type: "ease-in-out", duration: 0.6 }}
                    >
                      ✓ Done
                    </motion.span>
                  )}
                  {status === "error" && (
                  <motion.div
                      className="error-icon"
                      initial={{  x: "100%" }}
                      animate={{ x : 0 }}
                      transition={{ type: "ease-in-out", duration: 0.6 }}
                    >
                      ✗ Not Sent
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </form>
            <div className="side-details-contact-container">
              <div className="contact-info-container">
                <div className="contact-info-links-list">
                    <a href='' className='contact-info-links'>LinkedIn</a>
                    <a href='' className='contact-info-links'>Github</a>
                    <a href='' className='contact-info-links'>Behance</a>
                    <a href='' className='contact-info-links'>Codeforces</a>
                </div>
                <hr className="hor-cont-info" />
                <div className="contact-address-info">
                  <div className="address-info">Kamareddy, Telangana</div>
                  <div className="address-info">+91 9390237379</div>
                  <div className="address-info">rahulchiluka2511@gmail.com</div>
                </div>
              </div>
            </div>
          </div>  
      </section>
    
    </>
  );
};

export default Contact;
