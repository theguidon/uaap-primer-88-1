import { MdArrowOutward } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router";
import { motion } from "motion/react";

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
    splitRestBlurb.slice(0, -1).join(" ") +
    "\u00a0" +
    splitRestBlurb.slice(-1) +
    "...";

  return (
    <section
      id={slug} // use this as anchor for navigation sidebar
      className={`snap-start flex flex-col h-dvh relative overflow-hidden`}
    >
      <div className="bg-black flex-6 text-center relative">
        <img
          src="/assets/images/background.png"
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
        <img
          src={`/assets/images/${slug}.png`}
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <div
        className={`overflow-hidden text-white hidden font-display font-bold text-5xl absolute w-min top-8 mx-8`}
      >
        <motion.h2>
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
        className={`relative text-center p-8 text-uaap-blue flex-4 flex flex-col justify-between h-full`}
      >
        {/* <div
          className={`absolute h-[50dvh] w-8 top-0 ${alignment == "right" ? "right-0" : "left-0"} bg-white z-10 xl:w-20`}
        /> */}
        <div className="overflow-hidden">
          <motion.div initial="initial" whileInView="view">
            <div className="overflow-hidden">
              <motion.h2 className="capitalize font-display font-bold text-[2rem] mb-2 md:hidden">
                {team}
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 className="uppercase text-[3.75rem] font-display font-bold leading-[85%] mb-2 sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem]">
                {title}
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.p className="font-body max-w-96 text-uaap-dark-blue m-auto md:max-w-none">
                <span className="font-bold uppercase">{firstTwoBlurb} </span>
                {restBlurb}
              </motion.p>
            </div>
          </motion.div>
        </div>
        <NavLink to={`/${slug}`} className={`self-center mt-4`}>
          <motion.button
            whileHover="hover"
            className={`flex items-center gap-1 p-2.5 cursor-pointer upppercase bg-uaap-dark-blue text-white font-body font-bold`}
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
