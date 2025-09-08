import { MdArrowOutward } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import backgroundLeft from "../assets/images/background-left.png";
import backgroundRight from "../assets/images/background-right.png";

export function TeamSectionHalf({
  team,
  title,
  blurb,
  alignment,
  slug,
}: {
  team: string;
  title: string;
  blurb: string;
  alignment: "left" | "right";
  slug: string;
}) {
  const splitBlurb = blurb.split(" ");
  const firstTwoBlurb = splitBlurb.slice(0, 2).join(" ");
  const splitRestBlurb = splitBlurb.slice(2, 30);
  const restBlurb =
    splitRestBlurb.slice(0, -1).join(" ") + "\u00a0" + splitRestBlurb.slice(-1);
  const animsDuration = 0.75;
  const isMd = useMediaQuery({ query: "(width >= 48rem)" });
  const gender = slug.split("-")[0];

  return (
    <section
      id={slug} // use this as anchor for navigation sidebar
      className={`snap-start flex flex-col h-dvh relative overflow-hidden ${alignment == "right" ? "md:flex-row" : "md:flex-row-reverse"} md:h-[50dvh]`}
    >
      <motion.div
        initial="initial"
        whileInView="view"
        viewport={{ margin: "0px 0px -4px 0px" }}
        className="bg-black flex-6 text-center relative overflow-hidden"
      >
        <img
          src={alignment == "right" ? backgroundRight : backgroundLeft}
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover h-full min-w-full"
        />
        <motion.div
          variants={{
            initial: { translateX: "0" },
            view: {
              translateX: alignment == "right" ? "100%" : "-100%",
              transition: { ease: "easeInOut", duration: animsDuration },
            },
          }}
          className="bg-black w-full h-full absolute"
        />
        <motion.img
          variants={{
            initial: {
              translateY: "100%",
            },
            view: {
              translateY: "0",
              transition: { ease: "easeInOut", duration: animsDuration },
            },
          }}
          src={`/assets/images/${slug}.png`}
          alt=""
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 object-cover h-full z-10 ${slug == "mens-beach-volleyball" && "md:bottom-[-50px]"}`}
        />
      </motion.div>
      <div
        className={`overflow-hidden text-white hidden font-display font-bold text-5xl absolute w-min ${alignment == "right" ? "text-right" : "text-left"} top-8 ${alignment == "right" ? "right-0" : "left-0"} mx-8 md:block md:mx-[calc(60dvw-2.5rem)] lg:top-15 xl:mx-[calc(60dvw-6rem)] 2xl:top-20`}
      >
        <motion.h2
          initial={{
            translateX: alignment == "right" ? "100%" : "-100%",
          }}
          whileInView={{
            transition: {
              duration: animsDuration,

              ease: "easeInOut",
            },
            translateX: "0",
          }}
        >
          {team.split(" ").length > 2 ? (
            <>
              {/* puts sports that are two words or more in one line */}
              {/* putting the non breaking space (\u00a0) in json breaks the font (Gotham Condensed) */}
              {team.split(" ").slice(0, 1)}
              <br />
              <span className="whitespace-nowrap">
                {team.split(" ").slice(1).join(" ")}
              </span>
            </>
          ) : (
            team
          )}
        </motion.h2>
      </div>
      <div
        className={`relative text-center p-8 text-uaap-blue flex-4 flex flex-col justify-between h-full sm:p-15 md:p-8 ${alignment == "right" ? "md:text-right" : "md:text-left"} lg:p-15 2xl:p-20`}
      >
        {/* <div
          className={`absolute h-[50dvh] w-8 top-0 ${alignment == "right" ? "right-0" : "left-0"} bg-white z-10 xl:w-20`}
        /> */}
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
                  initial: isMd
                    ? {
                        translateX: alignment == "right" ? "100%" : "-100%",
                      }
                    : {
                        translateY: "-100%",
                      },
                  view: {
                    translateX: "0",
                    translateY: "0",
                    transition: {
                      duration: animsDuration,
                      ease: "easeInOut",
                    },
                  },
                }}
                className="uppercase text-[3.75rem] font-display font-bold leading-[85%] mb-2 sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem]"
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
                className="font-body max-w-96 text-uaap-dark-blue m-auto line-clamp-3 md:max-w-none"
              >
                <span className="font-bold uppercase">{firstTwoBlurb} </span>
                {restBlurb}
                {"..."}
              </motion.p>
            </div>
          </motion.div>
        </div>
        <NavLink
          to={`/${slug}`}
          className={`self-center mt-4 ${alignment == "right" ? "md:self-end" : "md:self-start"}`}
        >
          <motion.button
            whileHover="hover"
            className={`flex items-center gap-1 p-2.5 cursor-pointer upppercase ${gender == "mens" ? "bg-uaap-orange" : "bg-uaap-purple"} text-white font-body font-bold md:p-4 md:text-xl xl:text-2xl`}
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
