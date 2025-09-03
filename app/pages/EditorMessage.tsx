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
      <section className={styles.graphic}>
        <div
          style={{
            width: "500px",
            height: "500px",
            left: "-30%",
            bottom: "-15%"
          }}
        >
          <BloomingCircles
            outerSize="100%"
            radiiGap="10%"
            colors={["rgba(143, 39, 134, 0.3)", "rgba(143, 39, 134, 0.7)", "#8f2786"]}
            animStagger={25}
            animSpeed="500ms"
            delay={0}
          />
        </div>
        <div
          style={{
            width: "300px",
            height: "300px",
            left: "15%",
            top: "3%"
          }}
        >
          <BloomingCircles
            outerSize="100%"
            radiiGap="10%"
            colors={["rgba(249, 218, 44, 0.3)", "rgba(249, 218, 44, 0.7)", "#f9da2c"]}
            animStagger={25}
            animSpeed="500ms"
            delay={0}
          />
        </div>
        <div>
          <img
            src="/underphoto_message.svg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "20% 0"
            }}
          />
        </div>
        <div>
          <img
            src="/w-track-and-field.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "0 0"
            }}
          />
        </div>
        <div>
          <img
            src="/overphoto_message.svg"
            style={{
              width: "100%",
              height: "90%",
              objectFit: "cover",
              objectPosition: "-8%"
            }}
          />
        </div>
      </section>
    </section>
  );
}
