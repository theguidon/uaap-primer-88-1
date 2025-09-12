import { useMediaQuery } from "react-responsive";
import "../components/anims.css";
import styles from "./home.module.css";
import { motion, AnimatePresence } from "motion/react";
import BloomingCircles from "~/components/BloomingCircles";
import MobileHome from "~/pages/MobileHome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function EnterButton() {
  return (
    <a href="#editor-message">
      <motion.div
        initial={{ width: 0, padding: 0 }}
        whileInView={{ width: 120, padding: 12 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={styles.enterButton}
      >
        <p>Enter</p>
        <img src="/Arrow up-right.svg" />
      </motion.div>
    </a>
  );
}

export default function Homepage() {
  const images = [
    "jbahay.png",
    "badminton.png",
    "football.png",
    "table-tennis.png",
    "mfootball.png",
    "volleyball.png",
  ];
  const isMobile = useMediaQuery({ query: "(max-width: 899px)" });
  if (isMobile) {
    return <MobileHome />;
  } else {
    return (
      <section className={styles.mainSection} id="home">
        <motion.div
          className={styles.underPhoto}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src="/underphoto_desktop.svg"
            style={{
              width: "100vw",
              height: "100vh",
              minWidth: "100vw",
              objectFit: "cover",
            }}
          />
        </motion.div>
        <section className={styles.title}>
          <div>
            <motion.img
              src="/Long_Logo.svg"
              initial={{ y: "125%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ height: 25, marginBottom: 8 }}
            />
          </div>
          <div className={styles.titleUAAP}>
            <motion.h1
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              UAAP
            </motion.h1>
          </div>
          <div className={styles.titleSeason}>
            <motion.h1
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            >
              SEASON 88
            </motion.h1>
          </div>
          <div className={styles.titleSemester}>
            <motion.h1
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              First Semester Primer
            </motion.h1>
          </div>
          <EnterButton />
        </section>
        <section className={styles.graphic}>
          <div
            className={styles.bloom}
            style={{
              width: "40vw",
              height: "40vw",
              position: "absolute",
              right: "10%",
              top: -30,
              zIndex: 5,
            }}
          >
            <BloomingCircles
              outerSize="40vw"
              radiiGap="calc(40vw / 10)"
              colors={[
                "rgba(143, 39, 134, 0.3)",
                "rgba(143, 39, 134, 0.7)",
                "#8f2786",
              ]}
              animStagger={25}
              animSpeed={0.5}
              delay={0}
            />
          </div>
          <div
            className={styles.bloom}
            style={{
              width: "50vw",
              height: "50vw",
              position: "absolute",
              right: "-20%",
              top: 120,
              zIndex: 10,
            }}
          >
            <BloomingCircles
              outerSize="50vw"
              radiiGap="calc(50vw / 15)"
              colors={["#b7e1f2", "#56b8e1", "#0e9ad4"]}
              animStagger={25}
              animSpeed={0.75}
              delay={1}
            />
          </div>
        </section>
        <section className={styles.graphic} style={{ zIndex: 50 }}>
          <motion.img
            src="/overphoto_desktop.svg"
            style={{
              zIndex: 70,
              position: "absolute",
              right: 0,
            }}
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          />
          <Swiper
            spaceBetween={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {images.map((image) => (
              <SwiperSlide>
                {image == "jbahay.png" ? (
                  <motion.img
                    src={`/homepage/${image}`}
                    className="border-2 border-red-500 h-dvh mx-auto mt-10 ml-20"
                  />
                ) : image == "mfootball.png" ? (
                  <motion.img
                    src={`/homepage/${image}`}
                    className="border-2 border-red-500 h-dvh mx-auto mt-10"
                  />
                ) : image == "volleyball.png" ? (
                  <motion.img
                    src={`/homepage/${image}`}
                    className="border-2 border-red-500 h-dvh mx-auto mt-25"
                  />
                ) : image == "football.png" ? (
                  <motion.img
                    src={`/homepage/${image}`}
                    className="border-2 border-red-500 h-dvh mx-auto mt-25"
                  />
                ) : (
                  <motion.img
                    src={`/homepage/${image}`}
                    className="border-2 border-red-500 h-dvh mx-auto"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    );
  }
}
