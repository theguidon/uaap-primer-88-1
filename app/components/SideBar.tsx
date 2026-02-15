import styles from "./sidebar.module.css";
import { easeInOut, motion } from "motion/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import data from "../assets/data/data.json";
import { NavLink } from "react-router";

type SportKey = keyof (typeof data.sports);

function hasDropDown(sport: SportKey) {
  return (Object.values(data.sports[sport].teams).length > 1);
}

export default function SideBar({
  visible,
  setVisibility,
}: {
  visible: boolean;
  setVisibility: (isVisible: boolean) => void;
}) {
  const baseurl = import.meta.env.BASE_URL;

  const [selected, setSelected] = useState(-1);
  const sportKeys: SportKey[] = Object.keys(data.sports) as SportKey[];

  function select(hasLinks: boolean, ix: number) {
    setSelected(hasLinks ? ix : -1);
  }
  return (
    <nav
      className={styles.sidebar}
      style={{
        left: visible ? 0 : "-100%",
      }}
    >
      <button
        style={{
          marginLeft: 40,
          marginBottom: 28,
          cursor: "pointer",
        }}
        onClick={() => setVisibility(false)}
      >
        <IoClose color="white" size={32} />
      </button>
      <section className={styles.title}>
        <div>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.6,
              ease: easeInOut,
            }}
          >
            UAAP
          </motion.h1>
        </div>
        <div>
          <motion.h2
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.6,
              ease: easeInOut,
              delay: 0.1,
            }}
          >
            Season 88
          </motion.h2>
        </div>
        <div>
          <motion.p
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              ease: easeInOut,
            }}
          >
            Second Semester Primer
          </motion.p>
        </div>
      </section>
      <ul>
        {sportKeys.map((sportKey, ix) => (
          <li key={sportKey} className={selected == ix ? styles.selected : ""}>
            <section
              className={styles.navLinkTitle}
              onClick={() => select(hasDropDown(sportKey), ix)}
            >
              {!hasDropDown(sportKey) ?
                (<NavLink
                  to={`/#${sportKey}`}
                  onClick={() => setVisibility(false)}
                >
                  <p>{data.sports[sportKey].name}</p>
                </NavLink>)
                : (<p>{data.sports[sportKey].name}</p>)
              }
              {hasDropDown(sportKey) && (
                <img src={baseurl + `keyboard_arrow_down.svg`} />
              )}
            </section>
            {hasDropDown(sportKey) && (
              <ul>
                {Object.entries(data.sports[sportKey].teams).map(([slug, teamData]) => (
                  <li>
                    <NavLink
                      to={`/#${slug}`}
                      onClick={() => setVisibility(false)}
                    >
                      {teamData.team}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
