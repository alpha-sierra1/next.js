import Image from "next/image";
import styles from "@/styles/Home.module.css";

const AboutPage = () => {
  return (
    <body>
      <main style={{ background: "black" }}>
        <section className="section-2">
          <h1 className="about-heading">
            I bring <span className="color-tag-1">websites to life</span> with
            eye-catching designs and seamless functionality.
          </h1>
        </section>
      </main>

      <section className="section-3 working-about-description">
        <div className="working-image-div">
          {/* pic-1 class has been removed */}
          <Image
            src="/../public/aditi-about.jpg"
            alt="aditi's picture"
            className="working-about-image"
            width={800}
            height={600}
          />
        </div>
        <div className="working-about-section">
          <h2 className="description-heading">
            <span className="color-tag-1">Hey there,</span> I ama Aditi - an MBA
            grad turned into front-end developer!
          </h2>
          <div className="flex-main">
            <p className="description">
              Do not let the degree fool you though - my real passion lies in
              creating visually stunning interfaces that make users go wow When
              I am not busy crafting code that would make even the Terminator
              jealous, you will probably find me in front of my mirror, trying
              to decide which outfit will make me look like the tech version of
              Beyonce. I know, it is a tough job, but someone gotta do it!
            </p>
            <p className="description">
              But all jokes aside, I take my work seriously and always strive to
              create clean, efficient, and user-friendly interfaces. My
              attention to detail and can-do attitude ensures that I am
              constantly growing and learning in this ever-changing field. So,
              if you are looking for a tech-savvy problem solver with a knack
              for fashion and a good sense of humor, then look no further!
            </p>
            <p className="description">
              Turning to tech was a steep path and being self-taught developer
              was even steeper, but I am learning every day. Fueled by high
              energy levels and boundless enthusiasm, I am easily inspired and
              more than willing to follow my fascinations wherever they take me.
              I am passionate, expressive being with a natural ability to
              entertain and inspire. I am never satisfied to just come up with
              ideas. Instead, I have an impulsive need to act on them.
            </p>
          </div>
        </div>
      </section>
    </body>
  );
};

export default AboutPage;
