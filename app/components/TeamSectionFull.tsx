import { MdArrowOutward } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import backgroundLeft from "../assets/images/background-left.png";

export function TeamSectionFull({
  team,
  title,
  blurb,
  slug,
}: {
  team: string;
  title: string;
  blurb: string;
  slug: string;
}) {
  const splitBlurb = blurb.split(" ");
  const firstTwoBlurb = splitBlurb.slice(0, 2).join(" ");
  const splitRestBlurb = splitBlurb.slice(2, 30);
  const restBlurb =
    splitRestBlurb.slice(0, -1).join(" ") + "\u00a0" + splitRestBlurb.slice(-1);
  const animsDuration = 0.75;

  return (
    <section
      id={slug} // use this as anchor for navigation sidebar
      className={`snap-start flex flex-col h-dvh relative overflow-hidden`}
    >
      <motion.div
        initial="initial"
        whileInView="view"
        viewport={{ margin: "0px 0px -4px 0px" }}
        className="bg-black flex-6 text-center relative overflow-hidden"
      >
        <img
          src={backgroundLeft}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-1/2 object-cover h-full w-full"
        />
        <motion.div
          variants={{
            initial: { translateX: "0" },
            view: {
              translateX: "100%",
              transition: { ease: "easeInOut", duration: animsDuration },
            },
          }}
          className="bg-black w-full h-full absolute"
        />
        <motion.img
          variants={{
            initial: { translateY: "100%" },
            view: {
              translateY: "0",
              transition: { ease: "easeInOut", duration: animsDuration },
            },
          }}
          src={`/assets/images/${slug}.png`}
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover h-full z-10"
        />
      </motion.div>
      <div
        className={`overflow-hidden text-white hidden font-display font-bold text-5xl absolute w-min top-4 left-16 m-6 md:block lg:m-15 2xl:m-20`}
      >
        <motion.h2
          initial={{ translateX: "-100%" }}
          whileInView={{
            translateX: "0",
            transition: { ease: "easeInOut", duration: animsDuration },
          }}
        >
          {team.split(" ").length > 2 ? (
            <>
              {/* puts sports that are two words or more in one line */}
              {/* putting the non breaking space (\u00a0) in json breaks the font (Gotham Condensed) */}
              {team.split(" ").slice(0, 1)}
              <p className="w-max">{team.split(" ").slice(1).join(" ")}</p>
            </>
          ) : (
            team
          )}
        </motion.h2>
      </div>
      <div
        className={`relative text-center p-8 text-uaap-blue flex-3 flex flex-col justify-between md:p-15`}
      >
        <div className="overflow-hidden">
          <motion.div initial="initial" whileInView="view">
            <div className="overflow-hidden">
              <motion.h2
                variants={{
                  initial: {
                    translateY: "-100%",
                  },
                  view: {
                    translateY: "0",
                    transition: {
                      duration: animsDuration,
                      ease: "easeInOut",
                    },
                  },
                }}
                className="capitalize font-display font-bold text-[2rem] mb-2 md:hidden"
              >
                {team}
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                variants={{
                  initial: {
                    translateY: "-100%",
                  },
                  view: {
                    translateY: "0",
                    transition: {
                      duration: animsDuration,
                      ease: "easeInOut",
                    },
                  },
                }}
                className="uppercase text-[3.75rem] font-display font-bold leading-[85%] mb-2 sm:text-[4rem] md:text-[5rem] md:mb-4 lg:text-[6rem] xl:text-[7rem]"
              >
                {title}
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.p
                variants={{
                  initial: {
                    translateY: "-100%",
                  },
                  view: {
                    translateY: "0",
                    transition: {
                      duration: animsDuration,
                      ease: "easeInOut",
                      delay: 0.25,
                    },
                  },
                }}
                className="font-body max-w-96 text-uaap-dark-blue m-auto line-clamp-3 md:max-w-[56rem]"
              >
                <span className="font-bold uppercase">{firstTwoBlurb} </span>
                {restBlurb}
                {"..."}
              </motion.p>
            </div>
          </motion.div>
        </div>
        <NavLink to={`/${slug}`} className={`self-center mt-4`}>
          <motion.button
            whileHover="hover"
            className={`flex items-center gap-1 p-2 cursor-pointer upppercase bg-uaap-dark-blue text-white font-body font-bold md:pr-2 md:pl-3 md:text-lg`}
          >
            READ MORE
            <motion.div variants={{ hover: { translateX: 6, translateY: -6 } }}>
              <IconContext.Provider
                value={{
                  style: { color: "white" },
                  size: "1.75rem",
                }}
              >
                <MdArrowOutward />
              </IconContext.Provider>
            </motion.div>
          </motion.button>
        </NavLink>
      </div>
    </section>
  );
}
