import type { Route } from "./+types/WriteUp";
import data from "../assets/data/data.json";
import { Fragment } from "react/jsx-runtime";
import { MdArrowOutward } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink, redirect } from "react-router";
import { motion, stagger, type Variants } from "motion/react";
import { useRef, useState } from "react";
import SideBar from "~/components/SideBar";
import { IoMdMenu } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import background from "../assets/images/backgrond-writeup.png";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperClass } from "swiper/react";
import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  if (params.sport !== "editors-message" && !(params.sport in data.sports))
    throw redirect("/");
  if (params.sport == "editors-message") {
    return data["editors-message"];
  }
  const sportsData = data.sports[params.sport as keyof typeof data.sports];
  if (!sportsData) {
    throw redirect("/");
  }
  const teamKey = params.slug ? params.slug : params.sport;
  const teamData = sportsData.teams[teamKey as keyof typeof sportsData.teams];
  if (!teamData) {
    throw redirect("/");
  }
  return { slug: teamKey, data: teamData };
}
const variants: Variants = {
  initial: { translateY: "-100%" },
  view: {
    translateY: "0",
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};

function TaekwondoSlides({ slug }: { slug: string }) {
  const baseurl = import.meta.env.BASE_URL;
  const gender = slug.split('-')[0];
  const swiperRef = useRef<SwiperClass>(null);

  return (
    <IconContext.Provider value={{ color: "#c1c1c1", size: "3em" }}>
      <section
        style={{
          display: "flex"
        }}
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ cursor: "pointer" }}
          onClick={() => { if (swiperRef.current) { swiperRef.current.slidePrev() } }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.75 }}
        >
          <FaChevronLeft />
        </motion.button>
        <Swiper
          spaceBetween={0}
          loop={true}
          centeredSlides={true}
          navigation={false}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          modules={[EffectFade]}
        >
          {["kyorugi", "poomsae"].map((team) => (
            <SwiperSlide>
              <img
                src={baseurl + `writeups/${gender}-${team}.webp`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ cursor: "pointer" }}
          onClick={() => { if (swiperRef.current) { swiperRef.current.slideNext() } }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.75 }}
        >
          <FaChevronRight />
        </motion.button>
      </section>
    </IconContext.Provider>
  );
}

export default function WriteUp({ params, loaderData }: Route.ComponentProps) {
  const baseurl = import.meta.env.BASE_URL;
  const { team, title, byline, article } = ("data" in loaderData) ? loaderData.data : loaderData;
  const [sidebarVisible, setSideBarVisibility] = useState<boolean>(false);

  const imageName = ("slug" in loaderData) ? `${loaderData.slug}.webp` : undefined;
  let firstTwo = article.split(" ").splice(0, 2);
  firstTwo[1] = firstTwo[1] == "LIGHTNING—the" ? "LIGHTNING" : firstTwo[1];

  return (
    <>
      <SideBar
        visible={sidebarVisible}
        setVisibility={(isVisible: boolean) => setSideBarVisibility(isVisible)}
      />
      <div>
        <nav className="absolute w-dvw top-10 px-10 flex justify-between lg:px-20 z-10">
          <button
            style={{
              cursor: "pointer",
              zIndex: 300,
            }}
            onClick={() => setSideBarVisibility(true)}
          >
            <IoMdMenu color="white" size="36" />
          </button>
          <NavLink to={`/#${params.slug}`}>
            <motion.button
              whileHover="hover"
              className="cursor-pointer flex gap-1 text-white font-body font-bold text-lg items-center py-2 px-2.5 bg-uaap-dark-blue"
            >
              <motion.div
                variants={{
                  hover: { translateX: -6, translateY: -6 },
                }}
              >
                <IconContext.Provider
                  value={{
                    style: { color: "white", scale: "-1 1" },
                    size: "1.4rem",
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
        <div className="bg-black w-full h-[18rem] sm:h-[24rem] md:h-[25rem] relative overflow-hidden">
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
        <section
          className={`max-w-[50rem] w-full px-10 absolute ${params.slug == "editors-message" ? "top-25 sm:top-35 md:top-30" : "top-20"} left-1/2 translate-x-[-50%]`}
        >
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
              {!imageName ? (
                <motion.div
                  variants={variants}
                  className="font-display font-bold text-5xl xs:text-6xl text-white uppercase leading-[85%] sm:text-8xl"
                >
                  <h1>NEW FLIGHT,</h1>
                  <h1>HIGHER HEIGHTS</h1>
                </motion.div>
              ) : (
                <motion.h1
                  variants={variants}
                  className="font-display font-bold text-8xl text-white uppercase leading-[85%]"
                >
                  {title}
                </motion.h1>
              )}
            </div>
            <div className="overflow-hidden">
              {!imageName ? (
                <motion.h3 variants={variants} className="text-white pt-2 pb-4">
                  By <span className="font-bold">Caitlin Bernal</span> and{" "}
                  <span className="font-bold">Gabriel Renee Quizan</span>
                </motion.h3>
              ) : (
                <motion.h3 variants={variants} className="text-white pt-2 pb-4">
                  By <span className="font-bold">{byline}</span>
                </motion.h3>
              )}
            </div>
            {(
              <div className="overflow-y-clip">
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
                  style={{
                    width: (imageName && imageName.includes("taekwondo") ?
                      "calc(100% + 6em)" : "100%"),
                    position: "relative",
                    right: (imageName && imageName.includes("taekwondo") ?
                      "3em" : 0)
                  }}
                  className={`${!imageName ? "md:h-20 sm:h-12 bg-uaap-blue" : "aspect-[1.5]"}`}
                >
                  {imageName &&
                    (
                      imageName.includes("taekwondo") ? <TaekwondoSlides slug={loaderData.slug} /> : (
                        <img
                          src={baseurl + `writeups/${imageName}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />)
                    )
                  }
                </motion.div>
              </div>
            )}
          </motion.div>
          <div
            className={`font-body text-uaap-dark-blue ${!imageName ? "mt-[9rem] sm:mt-[4rem]" : "mt-[4rem]"} mb-[6rem] text-lg sm:text-2xl`}
          >
            {article.split("\n\n").map((paragraph, idx) =>
              idx == 0 ? (
                <p key={idx}>
                  <span className="font-bold uppercase">
                    {firstTwo.join(" ")}{firstTwo[1] != "LIGHTNING" && " "}
                  </span>
                  {paragraph.slice(firstTwo.join(" ").length)}
                </p>
              ) : (
                <Fragment key={idx}>
                  <br />
                  <p>{paragraph.startsWith("Editor's Note:") ? (<em>{paragraph}</em>) : paragraph}</p>
                </Fragment>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
}
