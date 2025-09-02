import styles from "./home.module.css";
import { motion } from "motion/react";
import BloomingCircles from "../components/BloomingCircles";

export default function MobileHome() {
  // const isMobile = useMediaQuery({ query: '(max-width): 400px' });
  // if (!isMobile) { return <p>DESKTOP</p>; }

  return (
    <main>
      <section className={styles.menu}>
      </section>
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
            width: '500px',
            height: '500px',
            position: 'absolute',
            left: -200,
            top: 50,
            zIndex: 20
          }}
        >
          <BloomingCircles
            outerSize="500px"
            radiiGap="50px"
            colors={['#b7e1f2', '#56b8e1', '#0e9ad4']}
            animStagger={25}
            animSpeed="500ms"
            delay={0}
          />
        </div>
        <div
          className={styles.bloom}
          style={{
            width: '300px',
            height: '300px',
            position: 'absolute',
            right: -120,
            top: 300,
            zIndex: 10
          }}
        >
          <BloomingCircles
            outerSize="300px"
            radiiGap="30px"
            colors={['rgba(249, 218, 44, 0.3)', 'rgba(249, 218, 44, 0.7)', 'rgba(249, 218, 44, 1)']}
            animStagger={25}
            animSpeed="500ms"
            delay={15}
          />
        </div>
        <motion.img
          src="/homepage_player_mobile.png"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
          style={{ width: "100%", zIndex: 50, position: "absolute" }}
        />
        <motion.div className="under-ribbon"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          style={{ overflowX: "clip", height: "100%", position: "absolute", zIndex: 25, right: 0 }}
        >
          <img
            src="/underphoto_mobile.svg"
            style={{ width: 400, height: "100%", objectFit: "cover", objectPosition: "right center" }}
          />
        </motion.div>
        <motion.div className="over-ribbon"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.65 }}
          style={{ overflowX: "clip", height: 450, position: "absolute", zIndex: 75, right: 0 }}
        >
          <img
            src="/overphoto_mobile.svg"
            style={{ width: 400, height: 450, objectFit: "cover", objectPosition: "right center" }}
          />
        </motion.div>
      </section>
    </main>
  );
}
