import styles from "./editormessage.module.css"
import BloomingCircles from "~/components/BloomingCircles";

export default function EditorMessage() {
  return (
    <section className={styles.container}>
      <section className={styles.text}>
        <h2>A message from the Editors</h2>
        <section className={styles.messageTitle}>
          <div><h1>ASCENT TO</h1></div>
          <div><h1>EXCELLENCE</h1></div>
        </section>
        <div className={styles.line} />
        <p className={styles.blurb}><span className={styles.firstTwo}>IN ITS</span> 87th season, the University Athletic Association of the Philippines (UAAP) will feature a loaded semestral showcase of collegiate sports on a historic scale</p>

        <div className={styles.readMore}>
          <p>Read More</p>
          <img src="/Arrow up-right.svg" />
        </div>
      </section>
      <section className={styles.graphic}></section>
    </section>
  );
}
