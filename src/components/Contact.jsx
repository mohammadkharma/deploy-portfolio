import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <form action="POST" data-netlify="true">
        <div className="field">
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="field">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="field">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div data-netlifyrecaptcha="true"></div>
        <div className="field">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>

      <footer>
        <a
          href="https://www.linkedin.com/in/mohammad-kharma-95606ba9/"
          class="fa fa-linkedin"
        ></a>
        <a
          href="https://www.xing.com/profile/Mohammad_Kharma2/cv"
          class="fa fa-xing"
        ></a>

        <p>mohammad.kh.8688@gmail.com</p>
      </footer>
    </div>
  );
};

export default Contact;
