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
    </main>
  );
}
