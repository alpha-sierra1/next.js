import styles from "@/styles/Contact.module.css";
import Link from "next/link";
const ContactPage = () => {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <h1 className={styles.contact}>
            Let&apos;s make some{" "}
            <span className={styles.colorTag1}>magic happen!</span>
          </h1>
        </div>
        <div>
          <p className={styles.contactHeading}>Contact</p>
          <p className={styles.contact2}>
            I am seeking out opportunities to collaborate with companies /
            agencies / individuals, not just work for them. I am always on the
            lookout for exciting projects and opportunities to collaborate with
            like-minded professionals.
          </p>
          <p className={styles.contact2}>
            Whether you have a specific project in mind or you are simply
            looking to chat about potential ideas, feel free to reach out to me.
            Let us chat about your project, your goals, and your wildest web
            fantasies. I am ready to dive in and create something spectacular
            together.
          </p>
          <p className={styles.contact2}>
            Drop me a line through carrier pigeon (just kidding, if possible, do
            that 😁), email, or any of the social media platforms mentioned
            below. I am excited to hear from you and explore the possibilities
            of working together!
          </p>
          <div className={styles.contactColumn1}>
            <Link
              href="mailto:as@aditisingh.dev"
              className={styles.contactLink}
            >
              as@aditisingh.dev
            </Link>
          </div>
          <div className={styles.contactColumn3}>
            <Link
              href="https://github.com/alpha-sierra1"
              className={styles.contactLink}
              target="_blank"
            >
              GitHub
            </Link>
          </div>
          <div className={styles.contactColumn3}>
            <Link
              href="https://www.linkedin.com/in/aditi-singh-21814b214/"
              className={styles.contactLink}
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
