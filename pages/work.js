import Image from "next/image";
import styles from "@/styles/Work.module.css";
import React, { useState } from "react";
import Link from "next/link";

const WorkSection = () => {
  return (
    <main className={styles.mainWork}>
      <div className={styles.container}>
        {/* PROJECT 1 */}
        <section className={styles.workSection}>
          <h1 className={`${styles.hbHeading} ${styles["himalayan-brew"]}`}>
            Albela <span className={styles.colorTag1}>House</span>
          </h1>
          <p className={`${styles.hbSubheading} ${styles["himalayan-brew"]}`}>
            Introducing Albela House: Uniting Seamless Functionality and
            Timeless Luxury
          </p>
          <div className={styles.brewImage}>
            <Image
              src="/Albela-house.png"
              alt="webstie landing page"
              className={styles.himalayanBrewImg}
              width={550}
              height={470}
            />
          </div>
          <h2
            className={`${styles.hbDescrpHeading} ${styles["himalayan-brew"]}`}
          >
            Description
          </h2>
          <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            Albela House: Seamless luxury and personalized experiences, all in
            the palm of your hand. Experience refined hospitality with
            integrated forms, a custom backend blog, and mobile-friendly design
            and SEO optimization.
          </p>
          <h2 className={`${styles.hbGoals} ${styles["himalayan-brew"]}`}>
            Goals
          </h2>
          <div className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            <p>
              Albela House is the culmination of my relentless passion for
              growth and innovation in web development. By seamlessly
              integrating Glide.js, integrated forms, a custom backend blog, and
              harnessing the power of Google Analytics, Albela House offers an
              elevated experience that combines mastery, innovation, and
              invaluable insights.
            </p>
            <p>
              With captivating transitions and interactive elements, Glide.js
              pushes the boundaries of web design to delight and engage
              visitors. Effortlessly integrated forms streamline bookings and
              inquiries, enhancing the user journey with personalized
              interactions. The custom backend blog becomes a platform for
              sharing inspiring stories and valuable insights, fostering a
              deeper connection with readers. Google Analytics empowers
              data-driven decision-making, providing valuable statistics and
              insights for optimizing the online presence.
            </p>
            <p>
              Albela House is mobile-friendly design ensures a seamless
              experience across devices, allowing guests to indulge in refined
              luxury wherever they are. Embrace Albela House, the perfect blend
              of mastery, innovation, and insights, offering a transformative
              digital experience that captivates and inspires.
            </p>
          </div>
          <div className={styles.hbWebsite}>
            <Link
              href="https://albelahouse.com/"
              target="_blank"
              className={styles.hbWebsiteLink}
            >
              Visit Website
            </Link>
          </div>
        </section>

        {/* PROJECT 2 */}

        <section className={styles.workSection}>
          <h1 className={`${styles.hbHeading} ${styles["himalayan-brew"]}`}>
            Himalayan <span className={styles.colorTag1}>Brew</span>
          </h1>
          <p className={`${styles.hbSubheading} ${styles["himalayan-brew"]}`}>
            Replicating Himalayan Brew My Experience Building a Tea Website with
            HTML and CSS
          </p>
          <div className={styles.brewImage}>
            <Image
              src="/himalayan-brew.png"
              alt="webstie landing page"
              className={styles.himalayanBrewImg}
              width={550}
              height={470}
            />
          </div>
          <h2
            className={`${styles.hbDescrpHeading} ${styles["himalayan-brew"]}`}
          >
            Description
          </h2>
          <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            In this post, I will be sharing my journey of replicating the
            Himalayan Brew website using HTML, CSS, and a few animations. I
            created this website before I was familiar with most CSS properties.
          </p>
          <h2 className={`${styles.hbGoals} ${styles["himalayan-brew"]}`}>
            Goals
          </h2>
          <div className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            <p>
              The main goal of this project was to challenge myself and gain
              hands-on experience in building a website using HTML and CSS. I
              wanted to replicate the Himalayan Brew website as it is a
              beautiful and functional tea website that showcases the different
              types of teas they offer.
            </p>
            <p>
              Additionally, I wanted to use this project as an opportunity to
              learn more about web development and explore new techniques to
              enhance the user experience. In the landing page of my replica
              website, I used parallax effects to create a dynamic and
              eye-catching background.
            </p>
            <p>
              I also used cubic bezier for smooth transitions between different
              sections of the website. By manipulating the timing and speed of
              animations, I was able to create a seamless and polished
            </p>
          </div>
          <div className={styles.hbWebsite}>
            <Link
              href="https://himalayan-brew.netlify.app"
              target="_blank"
              className={styles.hbWebsiteLink}
            >
              Visit Website
            </Link>
          </div>
        </section>

        {/* PROJECT 3 */}

        <section className={styles.workSection}>
          <h1 className={`${styles.hbHeading} ${styles["himalayan-brew"]}`}>
            Discover <span className={styles.colorTag1}>Bangalore</span>
          </h1>
          <p className={`${styles.hbSubheading} ${styles["himalayan-brew"]}`}>
            A minimalistic landing page about Bangalore City focused on enticing
            tourists.
          </p>
          <div className={styles.brewImage}>
            <Image
              src="/discover-bangalore.png"
              alt="webstie landing page"
              width={550}
              height={470}
              className={`${styles.himalayanBrewImg} ${styles["bangalore-img"]}`}
            />
          </div>
          <h2
            className={`${styles.hbDescrpHeading} ${styles["himalayan-brew"]}`}
          >
            Description
          </h2>
          <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            Built in a single evening, the Banglore City landing page was meant
            to be some independent practice for myself. Here are some of the
            features and concepts I worked on:
          </p>
          <h2 className={`${styles.hbGoals} ${styles["himalayan-brew"]}`}>
            Goals
          </h2>
          <div className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            {/* <ul className={styles.discoverBlore}> */}
            <p>Used animations to cycle through different words and colors</p>
            <p>
              Used `mix-blend-mode` to invert the hero text animation when it
              appears on a different background color
            </p>
            <p>Styled (including the date input) and built a functional form</p>
            <p>Mobile-responsive design</p>
            <p>Various usages of grid and flexbox containers</p>
            <p>
              Utilized CSS prefixes in order to allow browser support to
              animations & transitions
            </p>
            {/* </ul> */}
          </div>
          <div className={styles.hbWebsite}>
            <Link
              href="https://discover-bangalore.netlify.app/"
              target="_blank"
              className={styles.hbWebsiteLink}
            >
              Visit Website
            </Link>
          </div>
        </section>

        {/* PROJECT 4 */}

        <section className={styles.workSection}>
          <h1 className={`${styles.hbHeading} ${styles["himalayan-brew"]}`}>
            Omni<span className={styles.colorTag1}>food</span>
          </h1>
          <p className={`${styles.hbSubheading} ${styles["himalayan-brew"]}`}>
            Building a fictional Responsive AI-based Meal Subscription Service
            Website Using Transform and Pseudo-Classes
          </p>
          <div className={styles.brewImage}>
            <Image
              src="/omnifood.png"
              alt="webstie landing page"
              width={550}
              height={470}
              className={styles.himalayanBrewImg}
            />
          </div>
          <h2
            className={`${styles.hbDescrpHeading} ${styles["himalayan-brew"]}`}
          >
            Description
          </h2>
          <div className="paragraph-wrapper">
            <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
              My recent project involved building a responsive website for a
              fictional AI-based meal subscription service called Omnifood. The
              project aimed to create a user-friendly and visually appealing
              interface that would allow customers to easily subscribe and order
              their meals.
            </p>
            <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
              To achieve this responsiveness, I used a combination of media
              queries and the transform property to adjust the size and position
              of elements based on the screen size.
            </p>
            <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
              In addition, I utilized pseudo-classes to add interactive effects
              to the website. For example, I used the :hover pseudo-class to
              change the background color of buttons when the user hovers over
              them. This added an extra layer of interactivity and made the
              website feel more engaging.
            </p>
            <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
              I implemented a typography system to ensure that the
              website&apos;s content was both easy to read and visually
              appealing. This involved selecting appropriate font sizes and
              styles, as well as establishing a consistent hierarchy for
              headings and subheadings.
            </p>
          </div>
          <h2 className={`${styles.hbGoals} ${styles["himalayan-brew"]}`}>
            Goals
          </h2>
          <div className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            <p>
              Through this project, my main goal was to gain practical
              experience in building a responsive website that utilized
              cutting-edge web design techniques.
            </p>
            <p>
              As the project involved building a website for a fictional
              AI-based meal subscription service, By incorporating relevant
              images and colors, as well as intuitive navigation and ordering
              systems, I aimed to create a website that would appeal to
              potential customers and effectively showcase the benefits of the
              service.
            </p>
          </div>
          <div className={styles.hbWebsite}>
            <a
              href="https://omnifood-algo.netlify.app"
              target="_blank"
              className={styles.hbWebsiteLink}
            >
              Visit Website
            </a>
          </div>
        </section>

        {/* PROJECT 5  */}

        <section className={styles.workSection}>
          <h1 className={`${styles.hbHeading} ${styles["himalayan-brew"]}`}>
            Tra<span className={styles.colorTag1}>book</span>
          </h1>
          <p className={`${styles.hbSubheading} ${styles["himalayan-brew"]}`}>
            Building a Responsive Tourism Website with Figma
          </p>
          <div className={styles.brewImage}>
            <Image
              src="/trabook.png"
              alt="webstie landing page"
              width={550}
              height={470}
              className={styles.himalayanBrewImg}
            />
          </div>
          <h2
            className={`${styles.hbDescrpHeading} ${styles["himalayan-brew"]}`}
          >
            Description
          </h2>
          <div className={styles.paragraphWrapper}>
            <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
              Trabook is a tourism website that I recently created, inspired by
              the modern design principles of Figma. The aim of the project was
              to create a responsive and visually appealing website that would
              allow users to book their travel experiences with ease.
            </p>
            <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
              I utilized CSS variables, which allowed me to define and change
              the values of certain properties throughout the website. This made
              it easier to create a consistent and flexible design that could
              adapt to different screen sizes.
            </p>
            <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
              In addition, the website design was heavily inspired by Figma,
              which provided a range of design tools and resources that allowed
              me to create a polished and professional-looking design. By using
              Figma to create wireframes and mockups, I was able to get a clear
              understanding of how the website would look and function.
            </p>
            <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
              Finally, the website features a range of engaging and interactive
              elements, such as image sliders and hover effects, that are
              designed to create an immersive and enjoyable user experience.
            </p>
          </div>
          <h2 className={`${styles.hbGoals} ${styles["himalayan-brew"]}`}>
            Goals
          </h2>
          <div className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            <p>
              The main goal of this project was to gain practical experience in
              building a responsive website that utilized CSS variables to
              create a consistent and flexible design.
            </p>
            <p className="margin-top padding-bottom">
              In addition, I aimed to utilize the design principles of Figma to
              create a professional-looking website that effectively showcased
              the benefits of the Trabook tourism service.
            </p>
            <p className="margin-top padding-bottom">
              By incorporating image sliders and hover effects into the design,
              I aimed to create a website that was both visually appealing and
              enjoyable to use.
            </p>
          </div>
          <div className={styles.hbWebsite}>
            <a
              href="https://better-trabook.netlify.app"
              target="_blank"
              className={styles.hbWebsiteLink}
            >
              Visit Website
            </a>
          </div>
        </section>

        {/* PROJECT 6 */}

        <section className={styles.workSection}>
          <h1 className={`${styles.hbHeading} ${styles["himalayan-brew"]}`}>
            Dive Into <span className={styles.colorTag1}>Wizardry</span>
          </h1>
          <p className={`${styles.hbSubheading} ${styles["himalayan-brew"]}`}>
            A landing page about the fictional institution, Hogwarts, from the
            Harry Potter series. Redesigned from the original version to have a
            cleaner look and more features!
          </p>
          <div className={styles.brewImage}>
            <Image
              src="/wizardry-school.png"
              alt="webstie landing page"
              width={550}
              height={470}
              className={`${styles.himalayanBrewImg} ${styles["bangalore-img"]}`}
            />
          </div>
          <h2
            className={`${styles.hbDescrpHeading} ${styles["himalayan-brew"]}`}
          >
            Description
          </h2>
          <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            Despite having no real purpose and being one of my first landing
            page projects, it was meant to be mainly HTML & CSS. But I came back
            to it (after I had learned more concepts) to make it better visually
            and functionally. Here are some the key features I added and the
            things I improved from the original version:
          </p>
          <h2 className={`${styles.hbGoals} ${styles["himalayan-brew"]}`}>
            Goals
          </h2>
          <div className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            {/* <ul className={styles.discoverBlore}> */}
            <p>
              To achieve overlaying text on an element that only appears on
              `:hover`
            </p>
            <p>
              Used a responsive grid for the Course section and media queries
              with `grid-column` and `nth-child()` to target last two child
              items to center align them in smaller screens
            </p>
            <p>
              Used `@keyframe` animations that appear on `:hover` for all
              buttons & text overlays
            </p>
            <p>
              Used `touchstart` with an Event Listener so that all elements can
              be easily hovered on mobile with a single-tap (thanks to event
              bubbling)
            </p>
            <p>
              Added sticky navigation that appears at the bottom of the window
              after hero is no longer in viewport (thanks to
              `IntersectionObserver`)
            </p>
            <p>
              Created a functional form with logic built through `if else`
              statements
            </p>
            <p>
              Form has two buttons that execute different logic (and will print
              different messages based on user input)
            </p>
            <p>
              Added my own form validation so that incomplete & empty answers
              are not given a successful submission message
            </p>
            <p>Use `scrollIntoView()` to allow smooth scrolling</p>
            <p>
              Added cards to represent each Hogwarts house that allows toggling
              between them to display different House content
            </p>
            <p>
              - Use nested `for` loops to loop through each Hogwarts card as a
              button and then loop through it to show the correct content for
              each
            </p>
            {/* </ul> */}
          </div>
          <div className={styles.hbWebsite}>
            <Link
              href="https://wizardry-school.netlify.app/"
              target="_blank"
              className={styles.hbWebsiteLink}
            >
              Visit Website
            </Link>
          </div>
        </section>

        {/* PROJECT 7 */}

        <section className={styles.workSection}>
          <h1 className={`${styles.hbHeading} ${styles["himalayan-brew"]}`}>
            Chat <span className={styles.colorTag1}>GPT</span>
          </h1>
          <p className={`${styles.hbSubheading} ${styles["himalayan-brew"]}`}>
            A Web Development Practice Project Using CSS Grid
          </p>
          <div className={styles.brewImage}>
            <Image
              src="/chatgpt-clone.png"
              alt="webstie landing page"
              className={styles.himalayanBrewImg}
              width={550}
              height={470}
            />
          </div>
          <h2
            className={`${styles.hbDescrpHeading} ${styles["himalayan-brew"]}`}
          >
            Description
          </h2>
          <p className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            ChatGPT Clone is a web development project that mimics the user
            experience of OpenAI&apos;s language model ChatGPT. This project is
            created using HTML, CSS with an emphasis on CSS Grid layout. Users
            can interact with the ChatGPT clone by typing in messages, and the
            application will respond with automated text based on its
            pre-programmed responses..
          </p>
          <h2 className={`${styles.hbGoals} ${styles["himalayan-brew"]}`}>
            Goals
          </h2>
          <div className={`${styles.description1} ${styles["himalayan-brew"]}`}>
            <p>
              The primary goal of this project is to provide a hands-on learning
              experience for web developers who are interested in improving
              their skills in CSS Grid. Through building the ChatGPT clone,
              developers can practice implementing a complex layout using grid,
              as well as gain experience in responsive design, animation, and
              user interaction. Additionally, the ChatGPT clone can serve as a
              fun and engaging tool for users to explore the capabilities of CSS
              Grid and chat with a simulated language model.
            </p>
          </div>
          <div className={styles.hbWebsite}>
            <Link
              href="https://chat-gpt-clone.netlify.app"
              target="_blank"
              className={styles.hbWebsiteLink}
            >
              Visit Website
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkSection;
