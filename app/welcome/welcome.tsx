import { useMediaQuery } from "react-responsive";
import "./anims.css";
import styles from "../pages/home.module.css";
import { motion } from "motion/react";
import BloomingCircles from "~/components/BloomingCircles";

function EnterButton() {
  return (
    <motion.div
      initial={{ width: 0, padding: 0 }}
      animate={{ width: 120, padding: 12 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.enterButton}
    >
      <p>Enter</p>
      <img src="/Arrow up-right.svg" />
    </motion.div>
  );
}

export function Welcome() {
  // const isMobile = useMediaQuery({ query: '(max-width): 400px' });
  // if (!isMobile) { return <p>DESKTOP</p>; }

  return (
    <main>
      <motion.div
        className={styles.underPhoto}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img src="/underphoto_desktop.svg" style={{ width: "100vw", height: "100vh" }} />
      </motion.div>
      <section className={styles.title}>
        <div>
          <motion.img
            src="/Long_Logo.svg"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ height: 25, marginBottom: 8 }}
          />
        </div>
        <div className={styles.titleUAAP}>
          <motion.h1
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            UAAP
          </motion.h1>
        </div>
        <div className={styles.titleSeason}>
          <motion.h1
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
          >
            SEASON 88
          </motion.h1>
        </div>
        <div className={styles.titleSemester}>
          <motion.h1
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
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
            width: '450px',
            height: '450px',
            position: 'absolute',
            left: 100,
            top: -30,
            zIndex: 5
          }}
        >
          <BloomingCircles
            outerSize="450px"
            radiiGap="30px"
            colors={['rgba(143, 39, 134, 0.3)', 'rgba(143, 39, 134, 0.7)', '#8f2786']}
            animStagger={25}
            animSpeed="500ms"
            delay={0}
          />
        </div>
        <div
          className={styles.bloom}
          style={{
            width: '600px',
            height: '600px',
            position: 'absolute',
            right: -120,
            top: 120,
            zIndex: 10
          }}
        >
          <BloomingCircles
            outerSize="600px"
            radiiGap="40px"
            colors={['#b7e1f2', '#56b8e1', '#0e9ad4']}
            animStagger={25}
            animSpeed="750ms"
            delay={1}
          />
        </div>
      </section>
      <section className={styles.graphic} style={{ zIndex: 50 }}>
        <motion.img
          src="/overphoto_desktop.svg"
          style={{ zIndex: 70, position: "absolute", right: 0, bottom: "10%" }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.img
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "top", position: "absolute", bottom: 0, zIndex: 50 }}
          src="/homepage_player_desktop.png"
        />
      </section>
    </main >
  );
}
