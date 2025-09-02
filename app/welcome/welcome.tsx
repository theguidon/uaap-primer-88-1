import { useMediaQuery } from "react-responsive";
import "./anims.css";
import styles from "../pages/home.module.css";
import { motion, MotionConfig } from "motion/react";
import BloomingCircles from "~/components/BloomingCircles";

function EnterButton() {
  return (
    <div className={styles.enterButton}>
      <p>Enter</p>
      <img src="/Arrow up-right.svg" />
    </div>
  );
}

export function Welcome() {
  // const isMobile = useMediaQuery({ query: '(max-width): 400px' });
  // if (!isMobile) { return <p>DESKTOP</p>; }

  return (
    <main>
      <section className={styles.title}>
        <div className={styles.titleUAAP}>
          <h1>UAAP</h1>
        </div>
        <div className={styles.titleSeason}>
          <h1>SEASON 88</h1>
        </div>
        <div className={styles.titleSemester}>
          <h1>First Semester Primer</h1>
        </div>
        <EnterButton />
      </section>
    </main>
  );
}
