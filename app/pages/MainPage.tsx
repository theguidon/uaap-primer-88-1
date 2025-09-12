import Homepage from "./Homepage"
import EditorMessage from "./EditorMessage"
import { TeamSection } from "./TeamSection";
import { Credits } from "./Credits";
import "./main.css";
import data from "../assets/data/data.json";
import { useState, useEffect } from "react";
import SideBar from "~/components/SideBar";
import { IoMdMenu } from "react-icons/io";

export default function MainPage() {
  const [sidebarVisible, setSideBarVisibility] = useState<boolean>(false);
  const [menuColor, setMenuColor] = useState("#1c41d5");

  function getTeamIds() {
    return Object.values(data.sports).map((sports) => Object.keys(sports)).flat().map((sport) => '#' + sport);
  }

  const sectionIds = [
    "#editor-message",
    "#credits",
  ].concat(getTeamIds());

  useEffect(() => {
    const options = {
      root: document.querySelector("#menu-butto"),
      rootMargin: "0px",
      scrollMargin: "8px",
      threshold: 1.0
    };

    function callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.debug("Observing:", entry.target);
          if (entry.target.id == "credits" || entry.target.id == "cheerdance" || entry.target.id.includes("womens")) {
            setMenuColor("white");
          } else {
            setMenuColor("#1c41d5");
          }
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);

    sectionIds.forEach((id) => observer.observe(document.body.querySelector(id)));
  }, []);
  return (
    <>
      <SideBar visible={sidebarVisible} setVisibility={(isVisible: boolean) => setSideBarVisibility(isVisible)} />
      <button
        id="menu-button"
        style={{
          position: "fixed",
          left: "2%",
          top: "2%",
          cursor: "pointer",
          zIndex: 300
        }}
        onClick={() => setSideBarVisibility(true)}
      >
        <IoMdMenu
          color={menuColor}
          size="40"
          style={{
            transition: "color 100ms ease-in-out"
          }}
        />
      </button>
      <main>
        <Homepage />
        <EditorMessage />
        {Object.keys(data["sports"]).map((sport) => (
          <TeamSection key={sport} sport={sport as (keyof (typeof data.sports))} />
        ))}
        <Credits />
      </main>
    </>
  );
}
