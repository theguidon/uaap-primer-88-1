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

  const teamIds = Object.values(data.sports).flatMap(sport => Object.keys(sport.teams));

  const sectionIds = [
    'home',
    'editor-message',
    'credits'
  ];

  useEffect(() => {
    const options = {
      root: document.body,
      rootMargin: "0px 0px -50% 0px",
      scrollMargin: "0px",
      threshold: 0.7
    };

    const fullSizeOptions = {
      ...options,
      rootMargin: "0px",
      threshold: 0.8
    };

    function fullsize_callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (["credits", "editor-message"].includes(entry.target.id)) {
            setMenuColor("white");
          } else {
            setMenuColor("#1c41d5");
          }
        }
      })
    }
    function callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("right-team")) {
            setMenuColor("white");
          } else {
            setMenuColor("#1c41d5");
          }
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);
    const fullSizeObserver = new IntersectionObserver(fullsize_callback, fullSizeOptions);

    teamIds.forEach((id) => observer.observe(document.body.querySelector('#' + id)));
    sectionIds.forEach((id) => fullSizeObserver.observe(document.body.querySelector('#' + id)));
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
          size="36"
          style={{
            transition: "color 100ms ease-in-out"
          }}
        />
      </button>
      <main>
        <Homepage />
        <EditorMessage />
        {(Object.keys(data["sports"]) as (keyof typeof data.sports)[]).map((sport, ix) => {
          let align: ("left" | "right") = "left";
          if (Object.values(data.sports[sport].teams).length == 1) {
            align = ix % 2 == 1 ? "left" : "right";
          }
          return (
            <TeamSection key={sport} sport={sport} start={align} />
          );
        }
        )}
        <Credits />
      </main>
    </>
  );
}
