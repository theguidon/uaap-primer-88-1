import Homepage from "./Homepage"
import EditorMessage from "./EditorMessage"
import { TeamSection } from "./TeamSection";
import { Credits } from "./Credits";
import styles from "./main.module.css";
import data from "../assets/data/data.json";

export default function MainPage() {
  return (
    <main>
      <Homepage />
      <EditorMessage />
      {Object.keys(data).map((sport) => (
        <TeamSection key={sport} sport={sport as (keyof (typeof data))} />
      ))}
      <Credits />
    </main>
  );
}
