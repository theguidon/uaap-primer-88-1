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
      className={`flex flex-col h-dvh ${alignment == "right" ? "md:flex-row" : "md:flex-row-reverse"} md:h-[50dvh] relative`}
    >
      <div className="bg-black flex-6">
        image
        <h2
          className={`text-white hidden font-display font-bold text-4xl absolute w-min ${alignment == "right" ? "text-right" : "text-left"} top-0 ${alignment == "right" ? "right-0" : "left-0"} p-8 md:block md:px-[calc(60dvw-2rem)] lg:py-15 xl:py-10 xl:px-[calc(60dvw-6rem)]`}
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
        className={`text-center p-8 text-uaap-blue flex-4 flex flex-col justify-between h-full sm:p-15 md:p-8 ${alignment == "right" ? "md:text-right" : "md:text-left"} lg:py-15 xl:px-20 xl:py-10 xl:self-center`}
      >
        <div>
          <h2 className="capitalize font-display font-bold text-[2rem] mb-2 md:hidden">
            {team}
          </h2>
          <h2 className="uppercase text-[3.25rem] font-display font-bold leading-[85%] mb-2 sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] xl:mb-4">
            {title}
          </h2>
          <p className="text-sm font-body max-w-96 lg:text-base m-auto md:max-w-none">
            <span className="font-bold uppercase">{firstTwoBlurb} </span>
            {restBlurb}
          </p>
        </div>
        <a
          href={`/${slug}`}
          className={`self-center mt-4 ${alignment == "right" ? "md:self-end" : "md:self-start"} xl:mt-6`}
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
