import Homepage from "./Homepage"
import EditorMessage from "./EditorMessage"
import { TeamSection } from "./TeamSection";
import { Credits } from "./Credits";
import styles from "./main.module.css";
import data from "../assets/data/data.json";
import { useState } from "react";
import SideBar from "~/components/SideBar";
import { IoMdMenu } from "react-icons/io";
import { useScroll } from "motion/react";

export default function MainPage() {
  const [sidebarVisible, setSideBarVisibility] = useState<boolean>(false);
  const { scrollY } = useScroll();
  return (
    <>
      <SideBar visible={sidebarVisible} setVisibility={(isVisible: boolean) => setSideBarVisibility(isVisible)} />
      <button
        style={{
          position: "absolute",
          left: "2%",
          top: "2%",
          cursor: "pointer",
          zIndex: 300
        }}
        onClick={() => setSideBarVisibility(true)}
      >
        <IoMdMenu
          color="#1c41d5"
          size="40" />
      </button>
      <main>
        <Homepage />
        <EditorMessage />
        {Object.keys(data["sports"]).map((sport) => (
          <TeamSection key={sport} sport={sport as (keyof (typeof data))} />
        ))}
        <Credits />
      </main>
    </>
  );
}
