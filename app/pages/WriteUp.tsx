import type { Route } from "./+types/write-up";
import data from "../assets/data/data.json";
import { Fragment } from "react/jsx-runtime";
import { MdArrowOutward } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink, redirect } from "react-router";
import { motion, stagger, type Variants } from "motion/react";
import { useState } from "react";
import SideBar from "~/components/SideBar";
import { IoMdMenu } from "react-icons/io";
import background from "../assets/images/backgrond-writeup.png";

export async function loader({ params }: Route.ClientLoaderArgs) {
  const generalSport = params.slug.slice(params.slug.indexOf("-") + 1);
  if (params.slug != "editors-message" && !(generalSport in data.sports)) throw redirect("/");
  if (params.slug == "editors-message") {
    return data["editors-message"];
  }
  const sportsData = data.sports[generalSport as keyof (typeof data.sports)];
  return sportsData[params.slug as keyof (typeof sportsData)];
}
const variants: Variants = {
  initial: { translateY: "-100%" },
  view: {
    translateY: "0",
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};

export default function WriteUp({ params, loaderData }: Route.ComponentProps) {
  const { team, title, byline, article } = loaderData;
  const [sidebarVisible, setSideBarVisibility] = useState<boolean>(false);

  const imageName = team.includes("Track and Field") ? "track-and-field.webp" : `${params.slug}.webp`;

  return (
    <>
      <SideBar visible={sidebarVisible} setVisibility={(isVisible: boolean) => setSideBarVisibility(isVisible)} />
      <div>
        <nav className="absolute w-dvw top-10 px-10 flex justify-between lg:px-20 z-10">
          <button
            style={{
              cursor: "pointer",
              zIndex: 300
            }}
            onClick={() => setSideBarVisibility(true)}
          >
            <IoMdMenu
              color="white"
              size="40" />
          </button>
          <NavLink to={`/#${params.slug}`}>
            <motion.button
              whileHover="hover"
              className="cursor-pointer flex gap-1 text-white font-body font-bold text-lg items-center p-2 bg-uaap-dark-blue"
            >
              <motion.div
                variants={{
                  hover: { translateX: -6, translateY: -6 },
                }}
              >
                <IconContext.Provider
                  value={{
                    style: { color: "white", scale: "-1 1" },
                    size: "1.75rem",
                  }}
                >
                  <MdArrowOutward />
                </IconContext.Provider>
              </motion.div>
              BACK
            </motion.button>
          </NavLink>
        </nav>
        {/* bg image placeholder */}
        <div className="bg-black w-full h-[60dvh] relative overflow-hidden">
          <img
            src={background}
            alt=""
            className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover min-w-[40rem] lg:min-w-full"
          />
          <motion.div
            initial={{ translateX: "0" }}
            whileInView={{
              translateX: "-100%",
              transition: { ease: "easeInOut", duration: 0.75 },
            }}
            viewport={{ once: true }}
            className="bg-black w-full h-full absolute"
          />
        </div>
        <section className="max-w-[50rem] w-full px-10 absolute top-20 left-1/2 translate-x-[-50%]">
          <motion.div
            initial="initial"
            whileInView="view"
            viewport={{ once: true }}
            variants={{ view: { transition: { delayChildren: stagger(0.1) } } }}
          >
            <div className="overflow-hidden">
              <motion.h2
                variants={variants}
                className="font-display font-bold text-3xl text-white sm:text-4xl"
              >
                {team}
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={variants}
                className="font-display font-bold text-8xl text-white uppercase leading-[85%]"
              >
                {title}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h3 variants={variants} className="text-white pt-2 pb-4">
                By <span className="font-bold">{byline}</span>
              </motion.h3>
            </div>
            <div className="overflow-hidden">
              {/* image placeholder */}
              <motion.div
                variants={{
                  initial: { translateY: "-100%", opacity: 0 },
                  view: {
                    translateY: "0",
                    opacity: 1,
                    transition: { duration: 0.75, ease: "easeInOut" },
                  },
                }}
                className="w-full aspect-[1.5] bg-uaap-blue"
              >
                <img
                  src={`/public/writeups/${imageName}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
          <div className="font-body text-uaap-dark-blue mt-[4rem] mb-[6rem] text-lg sm:text-2xl">
            {article.split("\n\n").map((paragraph, idx) =>
              idx == 0 ? (
                <p key={idx}>
                  <span className="font-bold uppercase">
                    {paragraph.split(" ").slice(0, 2).join(" ")}{" "}
                  </span>
                  {paragraph.split(" ").slice(2).join(" ")}
                </p>
              ) : (
                <Fragment key={idx}>
                  <br />
                  <p>{paragraph}</p>
                </Fragment>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
}
