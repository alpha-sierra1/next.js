import styles from "@/styles/Home.module.css";
const ContactPage = () => {
  return (
    <>
      <body className="body">
        <div>
          <h1 className="contact">
            Let us make some <span className="color-tag-1">magic happen!</span>
          </h1>
        </div>
        <div>
          <p className="contact-heading">Contact</p>
          <p className="contact-2">
            I am seeking out opportunities to collaborate with companies /
            agencies / individuals, not just work for them. I am always on the
            lookout for exciting projects and opportunities to collaborate with
            like-minded professionals.
          </p>
          <p className="contact-2">
            Whether you have a specific project in mind or you are simply
            looking to chat about potential ideas, feel free to reach out to me.
            Let us chat about your project, your goals, and your wildest web
            fantasies. I am ready to dive in and create something spectacular
            together.
          </p>
          <p className="contact-2">
            Drop me a line through carrier pigeon (just kidding, if possible, do
            that 😁), email, or any of the social media platforms mentioned
            below. I am excited to hear from you and explore the possibilities
            of working together!
          </p>
          <div className="contact-column-1">
            <a href="mailto:as@aditisingh.dev" className="contact-link">
              as@aditisingh.dev
            </a>
          </div>
          <div className="contact-column-3">
            <a
              href="https://github.com/alpha-sierra1"
              className="contact-link"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div className="contact-column-3">
            <a
              href="https://www.linkedin.com/in/aditi-singh-21814b214/"
              className="contact-link"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </body>
    </>
  );
};

export default ContactPage;
