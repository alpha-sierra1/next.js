import Image from "next/image";
import styles from "@/styles/Home.module.css";

const WorkSection = () => {
  return (
    <main className="main-work">
      <div className="container">
        {/* PROJECT 1 */}
        <section className="work-section">
          <h1 className="hb-heading himalayan-brew">
            Albela <span className="color-tag-1">House</span>
          </h1>
          <p className="hb-subheading himalayan-brew">
            Introducing Albela House: Uniting Seamless Functionality and
            Timeless Luxury
          </p>
          <div className="brew-image">
            <Image
              src="/../public/Albela-house.png"
              alt="webstie landing page"
              className="himalayan-brew-img"
              width={800}
              height={600}
            />
          </div>
          <h2 className="hb-descrp-heading himalayan-brew">Description</h2>
          <p className="description-1 himalayan-brew">
            Albela House: Seamless luxury and personalized experiences, all in
            the palm of your hand. Experience refined hospitality with
            integrated forms, a custom backend blog, and mobile-friendly design
            and SEO optimization.
          </p>
          <h2 className="hb-goals himalayan-brew">Goals</h2>
          <div className="description-1 himalayan-brew">
            <p>
              Albela House is the culmination of my relentless passion for
              growth and innovation in web development. By seamlessly
              integrating Glide.js, integrated forms, a custom backend blog, and
              harnessing the power of Google Analytics, Albela House offers an
              elevated experience that combines mastery, innovation, and
              invaluable insights.
            </p>
            <p className="margin-top">
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
            <p className="margin-top padding-bottom">
              Albela House is mobile-friendly design ensures a seamless
              experience across devices, allowing guests to indulge in refined
              luxury wherever they are. Embrace Albela House, the perfect blend
              of mastery, innovation, and insights, offering a transformative
              digital experience that captivates and inspires.
            </p>
          </div>
          <div className="hb-website margin-top">
            <a
              href="https://albelahouse.com/"
              target="_blank"
              className="hb-website-link"
            >
              Visit Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkSection;
