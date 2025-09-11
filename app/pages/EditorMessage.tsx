import styles from "./editormessage.module.css"
import BloomingCircles from "~/components/BloomingCircles";
import { easeInOut, motion, AnimatePresence } from "motion/react";

export default function EditorMessage() {

  const images = ["football.png", "basketball.png", "volleyball.png"];
  return (
    <section className={styles.container} id="editor-message">
      <section className={styles.text}>
        <div style={{ overflow: "hidden", marginBottom: 48 }}>
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, ease: easeInOut }}
          >
            A message from the Editors
          </motion.h2>
        </div>
        <section className={styles.messageTitle}>
          <div>
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7, ease: easeInOut }}
            >
              ASCENT TO
            </motion.h1>
          </div>
          <div>
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7, ease: easeInOut }}
            >
              EXCELLENCE
            </motion.h1>
          </div>
        </section>
        <motion.div
          className={styles.line}
          initial={{ width: 0 }}
          whileInView={{ width: "70%" }}
          transition={{ duration: 0.6, ease: easeInOut }}
        />
        <div style={{ overflow: "hidden" }}>
          <motion.p
            className={styles.blurb}
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, ease: easeInOut }}
          >
            <span className={styles.firstTwo}>IN ITS</span> 87th season, the University Athletic Association of the Philippines (UAAP) will feature a loaded semestral showcase of collegiate sports on a historic scale</motion.p>
        </div>

        <a href="/editors-message">
          <div className={styles.readMore}>
            <p>Read More</p>
            <img src="/Arrow up-right.svg" />
          </div>
        </a>
      </section>
      <section className={styles.graphic}>
        <div
          className={styles.bloom1}
        >
          <BloomingCircles
            outerSize="100%"
            radiiGap="10%"
            colors={["rgba(143, 39, 134, 0.3)", "rgba(143, 39, 134, 0.7)", "#8f2786"]}
            animStagger={25}
            animSpeed={0.5}
            delay={0}
          />
        </div>
        <div
          className={styles.bloom2}
        >
          <BloomingCircles
            outerSize="100%"
            radiiGap="10%"
            colors={["rgba(249, 218, 44, 0.3)", "rgba(249, 218, 44, 0.7)", "#f9da2c"]}
            animStagger={25}
            animSpeed={0.5}
            delay={0}
          />
        </div>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          style={{ overflow: "hidden" }}
          transition={{ duration: 0.6, ease: easeInOut }}
        >
          <img
            src="/underphoto_message.svg"
            className={styles.underphoto}
          />
        </motion.div>
        <div style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}>
          <AnimatePresence>
            <motion.img
              className={styles.runner}
              key={`/editormessage/${images[Math.floor(Math.random() * images.length)]}`}
              src={`/editormessage/${images[Math.floor(Math.random() * images.length)]}`}
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6, ease: easeInOut }}
            />
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}
          style={{ overflow: "hidden" }}
        >
          <img
            src="/overphoto_message.svg"
            className={styles.overphoto}
          />
        </motion.div>
      </section>
    </section >
  );
}
