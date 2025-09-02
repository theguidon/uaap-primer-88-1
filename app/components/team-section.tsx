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
      id={slug}
      className={`flex flex-col h-dvh ${alignment == "right" ? "lg:flex-row" : "lg:flex-row-reverse"} lg:h-[50dvh]`}
    >
      <div className="bg-black flex-6 relative">
        image
        <h2
          className={`text-white hidden font-display text-4xl absolute w-min ${alignment == "right" ? "text-right" : "text-left"} top-0 ${alignment == "right" ? "right-0" : "left-0"} p-[5rem] font-bold lg:block`}
        >
          {team}
        </h2>
      </div>
      <div
        className={`text-center p-8 text-uaap-blue flex-4 flex flex-col ${alignment == "right" ? "lg:text-right" : "lg:text-left"} lg:px-20 lg:py-0 lg:self-center`}
      >
        <h2 className="capitalize font-display font-bold text-[2rem] lg:hidden">
          {team}
        </h2>
        <h2 className="uppercase text-[3.25rem] font-display font-bold leading-[85%] my-2 lg:text-[8.75rem] lg:my-4 lg:mt-0">
          {title}
        </h2>
        <div className="text-sm font-body lg:text-base">
          <span className="font-bold uppercase">{firstTwoBlurb} </span>
          {restBlurb}
        </div>
        <a
          href={`/${slug}`}
          className={`self-center mt-4 lg:mt-6 ${alignment == "right" ? "lg:self-end" : "lg:self-start"}`}
        >
          <button className="flex gap-1 p-2.5 cursor-pointer upppercase bg-uaap-dark-blue text-white font-body font-bold lg:text-2xl lg:p-4">
            READ MORE
            <div>{">"}</div>
          </button>
        </a>
      </div>
    </section>
  );
}
