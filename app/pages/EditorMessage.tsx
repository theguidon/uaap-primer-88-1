import styles from "./editormessage.module.css";
import BloomingCircles from "~/components/BloomingCircles";
import { easeInOut, motion, AnimatePresence } from "motion/react";
import { NavLink } from "react-router";

export default function EditorMessage() {
  const baseurl = import.meta.env.BASE_URL;
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
              NEW FLIGHT,
            </motion.h1>
          </div>
          <div>
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7, ease: easeInOut }}
            >
              HIGHER HEIGHTS
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
            <span className={styles.firstTwo}>ANOTHER YEAR</span> of the
            University Athletic Association of the Philippines (UAAP) is on the
            horizon, and the Blue Eagles are poised to bring glory to Loyola
            Heights once more.
          </motion.p>
        </div>

        <NavLink to={`/editors-message`}>
          <div className={styles.readMore}>
            <p>Read More</p>
            <img src={baseurl + `/Arrow up-right.svg`} />
          </div>
        </NavLink>
      </section>
      <section className={styles.graphic}>
        <div className={styles.bloom1}>
          <BloomingCircles
            outerSize="100%"
            radiiGap="10%"
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
        <div className={styles.bloom2}>
          <BloomingCircles
            outerSize="100%"
            radiiGap="10%"
            colors={[
              "rgba(249, 218, 44, 0.3)",
              "rgba(249, 218, 44, 0.7)",
              "#f9da2c",
            ]}
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
            src={baseurl + `/underphoto_message.svg`}
            className={styles.underphoto}
          />
        </motion.div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AnimatePresence>
            <motion.img
              className={styles.runner}
              src={baseurl + `/editormessage/${images[1]}`}
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
            src={baseurl + `/overphoto_message.svg`}
            className={styles.overphoto}
          />
        </motion.div>
      </section>
    </section>
  );
}
