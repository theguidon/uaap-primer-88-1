import Homepage from "./Homepage"
import EditorMessage from "./EditorMessage"
import { TeamSection } from "./TeamSection";
import { Credits } from "./Credits";
import styles from "./main.module.css";

export default function MainPage() {
  return (
    <main>
      <Homepage />
      <EditorMessage />
      <TeamSection />
      <Credits />
    </main>
  );
}
