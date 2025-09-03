import type { Route } from "./+types/write-up";
import data from "../assets/data/data.json";
import { Fragment } from "react/jsx-runtime";
import { MdArrowOutward } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router";

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

export default function WriteUp({ params, loaderData }: Route.ComponentProps) {
  const { team, title, byline, article } = loaderData;
  return (
    <div>
      <nav className="absolute w-dvw top-20 px-20 flex justify-between">
        <div className="text-white">hamburger</div>
        <NavLink to={`/#${params.slug}`}>
          <button className="cursor-pointer flex gap-1 text-white font-body font-bold text-2xl items-center p-5 bg-uaap-dark-blue">
            <IconContext.Provider
              value={{
                style: { color: "white", scale: "-1 1" },
                size: "1.875rem",
              }}
            >
              <MdArrowOutward />
            </IconContext.Provider>
            BACK
          </button>
        </NavLink>
      </nav>
      {/* bg image placeholder */}
      <div className="bg-black w-full h-[60dvh]" />
      <section className="max-w-[50rem] w-full px-10 absolute top-44 left-1/2 translate-x-[-50%]">
        <h2 className="font-display font-bold text-3xl text-white sm:text-4xl">
          {team}
        </h2>
        <h1 className="font-display font-bold text-8xl text-white uppercase leading-[85%] sm:text-9xl">
          {title}
        </h1>
        <h3 className="text-white mt-2 mb-4">By {byline}</h3>
        {/* image placeholder */}
        <div className="w-full aspect-[1.5] bg-uaap-blue" />
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
