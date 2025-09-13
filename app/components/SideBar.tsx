import styles from "./sidebar.module.css";
import { easeInOut, motion } from "motion/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import data from "../assets/data/data.json";

export default function SideBar({
  visible,
  setVisibility,
}: {
  visible: boolean;
  setVisibility: (isVisible: boolean) => void;
}) {
  const baseurl = import.meta.env.BASE_URL;

  function slugToSport(slug: string) {
    const words = slug.split("-");
    return words.map((w) => `${w[0].toUpperCase()}${w.slice(1)}`).join(" ");
  }
  const [selected, setSelected] = useState(-1);
  const links = Object.keys(data.sports).map(slugToSport);

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
            First Semester Primer
          </motion.p>
        </div>
      </section>
      <ul>
        {links.map((link, ix) => (
          <li key={link} className={selected == ix ? styles.selected : ""}>
            <section
              className={styles.navLinkTitle}
              onClick={() => select(link != "Cheerdance", ix)}
            >
              {link == "Cheerdance" ? (
                <a
                  href={`/#${link.toLowerCase()}`}
                  onClick={() => setVisibility(false)}
                >
                  <p>{link}</p>
                </a>
              ) : (
                <p>{link}</p>
              )}
              {link != "Cheerdance" && (
                <img src={baseurl + `/keyboard_arrow_down.svg`} />
              )}
            </section>
            {link != "Cheerdance" && (
              <ul>
                <li>
                  <a
                    href={`/#mens-${link.split(" ").join("-").toLowerCase()}`}
                    onClick={() => setVisibility(false)}
                  >
                    Men's {link}
                  </a>
                </li>
                <li>
                  <a
                    href={`/#womens-${link.split(" ").join("-").toLowerCase()}`}
                    onClick={() => setVisibility(false)}
                  >
                    Women's {link}
                  </a>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
