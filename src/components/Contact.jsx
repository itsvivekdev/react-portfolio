import { Mail, MapPin, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
       toast.success("Message sent successfully!");

        form.current.reset();

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

       toast.error("Something went wrong!");

        setLoading(false);
      });
  };


  return (
    <div>
      <section id='contact' className='contact'>
        <h2 data-aos="zoom-out" data-aos-duration="800">LET'S BUILD<br />SOMETHING.  </h2>
        <div className="container">
          <h3>Currently open to <span>internships.</span></h3>
          <p>I'm looking for internship opportunities where I can grow as a frontend developer. Based in Delhi, India — open to remote and on-site roles.</p>

          <div className="contact-content" data-aos="fade-right" data-aos-duration="1000">

            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder='Enter your name' required />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Enter your email' required />
              <label htmlFor="msg">Message</label>
              <textarea name="message" id="msg" placeholder='Enter your message' required></textarea>
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="contact-detail" data-aos="fade-left" data-aos-duration="1000">
              <div className="info">
                <p>Email <a href="mailto:vivekkumar.webdev@gmail.com"><Mail strokeWidth={1.5} color="#a855f7" size={20} /> vivekkumar.webdev@gmail.com</a></p>

              </div>
              <div className="info">
                <p>Location <span><MapPin strokeWidth={1.5} color="#a855f7" size={20} /> Delhi,India</span></p>
              </div>

              <div className="link-info">
                <p>Elsewhere</p>
                <div className="link">

                  <a href="https://github.com/itsvivekdev"><FaGithub strokeWidth={1.5} color="#a855f7" size={20} /> GitHub</a>
                  <a href="https://www.linkedin.com/in/vivek-kumar-a73bb0360/"><FaLinkedin strokeWidth={1.5} color="#a855f7" size={20} /> Linkedin</a>


                </div>


              </div>
              <a href="Vivek.pdf" download="Vivek.pdf">
  <button><Download strokeWidth={1.5} color="#a855f7" size={20} /> Download Resume</button>
</a>


            </div>


          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact