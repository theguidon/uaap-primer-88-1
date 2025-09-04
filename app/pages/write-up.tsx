import type { Route } from "./+types/write-up";
import data from "../assets/data/data.json";
import { Fragment } from "react/jsx-runtime";
import { MdArrowOutward } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router";
import { motion, stagger, type Variants } from "motion/react";

const articleData: {
  [key: string]: {
    team: string;
    title: string;
    byline: string;
    article: string;
  };
} = data;
export async function loader({ params }: Route.LoaderArgs) {
  return articleData[params.slug];
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
  return (
    <div>
      <nav className="absolute w-dvw top-20 px-10 flex justify-between lg:px-20">
        <div className="text-white">hamburger</div>
        <NavLink to={`/#${params.slug}`}>
          <motion.button
            whileHover="hover"
            className="cursor-pointer flex gap-1 text-white font-body font-bold text-2xl items-center p-2.5 bg-uaap-dark-blue lg:p-4 lg:text-2xl"
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
      <div className="bg-black w-full h-[60dvh]" />
      <section className="max-w-[50rem] w-full px-10 absolute top-44 left-1/2 translate-x-[-50%]">
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
              className="font-display font-bold text-8xl text-white uppercase leading-[85%] sm:text-9xl"
            >
              {title}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h3 variants={variants} className="text-white pt-2 pb-4">
              By {byline}
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
            />
          </div>
        </motion.div>
        <div className="font-body text-uaap-blue mt-[4rem] mb-[6rem]">
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
  );
}
