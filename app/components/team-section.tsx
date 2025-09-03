import { MdArrowOutward } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router";
import { motion } from "motion/react";

export function TeamSection({
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
  const restBlurb = splitBlurb.slice(2).join(" ");
  return (
    <section
      id={slug} // use this as anchor for navigation sidebar
      className={`snap-start flex flex-col h-dvh relative overflow-hidden ${alignment == "right" ? "md:flex-row" : "md:flex-row-reverse"} md:h-[50dvh]`}
    >
      <div className="bg-black flex-6">image</div>
      <div className="absolute hidden bg-black z-10 h-1/3 top-0 right-[calc(40dvw+2.5rem)] w-[calc(100dvw-(40dvw+2.5rem)*2)] md:block xl:right-[calc(40dvw+6rem)] xl:w-[calc(100dvw-(40dvw+6rem)*2)]" />
      <motion.h2
        initial={{
          translateX: alignment == "right" ? "20%" : "-20%",
        }}
        whileInView={{
          transition: { duration: 0.75 },
          translateX: "0",
        }}
        className={`text-white hidden font-display font-bold text-5xl absolute w-min ${alignment == "right" ? "text-right" : "text-left"} top-0 ${alignment == "right" ? "right-0" : "left-0"} p-8 md:block md:px-[calc(60dvw-2.5rem)] lg:py-15 xl:py-10 xl:px-[calc(60dvw-6rem)] 2xl:py-14`}
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
      <div
        className={`relative text-center p-8 text-uaap-blue flex-4 flex flex-col justify-between h-full sm:p-15 md:p-8 ${alignment == "right" ? "md:text-right" : "md:text-left"} lg:py-15 xl:px-20 xl:py-10 xl:self-center 2xl:py-14`}
      >
        <div
          className={`absolute h-[50dvh] w-8 top-0 ${alignment == "right" ? "right-0" : "left-0"} bg-white z-10 xl:w-20`}
        />
        <motion.div>
          <h2 className="capitalize font-display font-bold text-[2rem] mb-2 md:hidden">
            {team}
          </h2>
          <motion.h2
            initial={{
              translateX: alignment == "right" ? "100%" : "-100%",
            }}
            whileInView={{
              transition: { duration: 0.75 },
              translateX: "0",
            }}
            className="uppercase text-[3.75rem] font-display font-bold leading-[85%] mb-2 sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] xl:mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{
              translateX: alignment == "right" ? "100%" : "-100%",
            }}
            whileInView={{
              transition: { duration: 0.75, delay: 0.125 },
              translateX: "0",
            }}
            className="text-sm font-body max-w-96 lg:text-base m-auto md:max-w-none"
          >
            <span className="font-bold uppercase">{firstTwoBlurb} </span>
            {restBlurb}
          </motion.p>
        </motion.div>
        <NavLink
          to={`/${slug}`}
          className={`self-center mt-4 ${alignment == "right" ? "md:self-end" : "md:self-start"}`}
        >
          <motion.button
            whileHover={{
              transition: { duration: 0.125 },
              translate: "0.5rem -0.5rem",
            }}
            className="flex items-center gap-1 p-2.5 cursor-pointer upppercase bg-uaap-dark-blue text-white font-body font-bold xl:text-2xl xl:p-4"
          >
            READ MORE
            <div>
              <IconContext.Provider
                value={{
                  style: { color: "white" },
                  size: "1.75rem",
                }}
              >
                <MdArrowOutward />
              </IconContext.Provider>
            </div>
          </motion.button>
        </NavLink>
      </div>
    </section>
  );
}
