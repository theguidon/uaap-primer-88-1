import type { Route } from "./+types/write-up";
import data from "../assets/data/data.json";
import { Fragment } from "react/jsx-runtime";

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

export default function WriteUp({ loaderData }: Route.ComponentProps) {
  const { team, title, byline, article } = loaderData;
  return (
    <div>
      {/* bg image */}
      <div className="bg-black w-full h-[70dvh]" />
      <section className="max-w-[52rem] absolute top-36 left-1/2 translate-x-[-50%]">
        <h2 className="font-display font-bold text-4xl text-white">{team}</h2>
        <h1 className="font-display font-bold text-9xl text-white uppercase">
          {title}
        </h1>
        <h3 className="text-white mb-4">By {byline}</h3>
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
