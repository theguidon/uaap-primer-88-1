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
      className={`flex flex-col h-dvh ${alignment == "right" ? "md:flex-row" : "md:flex-row-reverse"} md:h-[50dvh]`}
    >
      <div className="bg-black flex-6 relative">
        image
        <h2
          className={`text-white hidden font-display text-4xl absolute w-min ${alignment == "right" ? "text-right" : "text-left"} top-0 ${alignment == "right" ? "right-0" : "left-0"} p-[2.5rem] font-bold xl:block`}
        >
          {team.split(" ").length > 2 ? (
            <>
              {/* puts sports that are two words or more in one line */}
              {team.split(" ").slice(0, 1)}{" "}
              <p className="w-max">{team.split(" ").slice(1).join(" ")}</p>
            </>
          ) : (
            team
          )}
        </h2>
      </div>
      <div
        className={`text-center p-8 text-uaap-blue flex-4 flex flex-col justify-between h-full lg:p-15 ${alignment == "right" ? "xl:text-right" : "xl:text-left"} xl:px-20 xl:py-10 xl:self-center`}
      >
        <div>
          <h2 className="capitalize font-display font-bold text-[2rem] xl:hidden">
            {team}
          </h2>
          <h2 className="uppercase text-[3.25rem] font-display font-bold leading-[85%] my-2 xl:text-[6rem] xl:my-4 xl:mt-0">
            {title}
          </h2>
          <p className="text-sm font-body xl:text-base">
            <span className="font-bold uppercase">{firstTwoBlurb} </span>
            {restBlurb}
          </p>
        </div>
        <a
          href={`/${slug}`}
          className={`self-center mt-4 xl:mt-6 ${alignment == "right" ? "xl:self-end" : "xl:self-start"}`}
        >
          <button className="flex gap-1 p-2.5 cursor-pointer upppercase bg-uaap-dark-blue text-white font-body font-bold xl:text-2xl xl:p-4">
            READ MORE
            <div>{">"}</div>
          </button>
        </a>
      </div>
    </section>
  );
}
