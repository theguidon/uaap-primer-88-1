import styles from "./home.module.css";
import { motion } from "motion/react";
import BloomingCircles from "../components/BloomingCircles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function MobileHome() {
  const images = ["basketball.png", "football.png"];

  return (
    <section className={styles.mainSection}>
      <section className={styles.title}>
        <div>
          <motion.img
            src="/Long_Logo.svg"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
        <div className={styles.titleUAAP}>
          <motion.h1
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            UAAP
          </motion.h1>
        </div>
        <div className={styles.titleSeason}>
          <motion.h1
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
          >
            SEASON 88
          </motion.h1>
        </div>
        <div className={styles.titleSemester}>
          <motion.h1
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            First Semester Primer
          </motion.h1>
        </div>
      </section>
      <section className={styles.graphic}>
        <div
          className={styles.bloom}
          style={{
            width: '90vw',
            height: '90vw',
            position: 'absolute',
            left: -200,
            top: 50,
            zIndex: 20
          }}
        >
          <BloomingCircles
            outerSize="100%"
            radiiGap="10%"
            colors={['#b7e1f2', '#56b8e1', '#0e9ad4']}
            animStagger={25}
            animSpeed={0.75}
            delay={0}
          />
        </div>
        <div
          className={styles.bloom}
          style={{
            width: '60vw',
            height: '60vw',
            position: 'absolute',
            right: -120,
            top: 300,
            zIndex: 10
          }}
        >
          <BloomingCircles
            outerSize="100%"
            radiiGap="10%"
            colors={['rgba(249, 218, 44, 0.3)', 'rgba(249, 218, 44, 0.7)', 'rgba(249, 218, 44, 1)']}
            animStagger={25}
            animSpeed={0.6}
            delay={15}
          />
        </div>
        <Swiper
          className={styles.swiper}
          style={{
            zIndex: 500,
            width: "100%",
          }}
          spaceBetween={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
        >
          {images.map((image) => (
            <SwiperSlide>
              <img
                style={{
                  height: "80%",
                  objectFit: "contain"
                }}
                src={`/homepage/${image}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div className={styles.underRibbon}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          style={{ overflowX: "clip", height: "100%", position: "absolute", zIndex: 25, right: 0 }}
        >
          <img
            src="/underphoto_mobile.svg"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center" }}
          />
        </motion.div>
        <motion.div className="over-ribbon"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.65 }}
          style={{ overflowX: "clip", height: 200, position: "absolute", zIndex: 75, right: 0 }}
        >
          <img
            src="/overphoto_mobile.svg"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center" }}
          />
        </motion.div>
      </section>
    </section>
  );
}
