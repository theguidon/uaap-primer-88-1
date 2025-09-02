export function TeamSection({
  team,
  title,
  blurb,
  alignment,
}: {
  team: string;
  title: string;
  blurb: string;
  alignment: "left" | "right";
}) {
  const splitBlurb = blurb.split(" ");
  const firstTwoBlurb = splitBlurb.slice(0, 2).join(" ");
  const restBlurb = splitBlurb.slice(2).join(" ");
  return (
    <section
      className={`flex flex-col h-dvh lg:${alignment == "right" ? "flex-row" : "flex-row-reverse"} lg:h-[50dvh] border-red-500 border-2`}
    >
      <div className="bg-black flex-6 relative">
        image
        <h2
          className={`text-white hidden font-display text-4xl absolute w-min text-${alignment} top-0 ${alignment}-0 p-[5rem] font-bold lg:block`}
        >
          {team}
        </h2>
      </div>
      <div
        className={`text-center p-8 text-uaap-blue flex-4 flex flex-col lg:text-${alignment == "right" ? "right" : "left"} lg:px-20 lg:py-10`}
      >
        <h2 className="capitalize font-display font-bold lg:hidden">{team}</h2>
        <h2 className="uppercase text-[3.25rem] font-display font-bold leading-[85%] my-2 lg:text-[8.75rem] lg:my-4 lg:mt-0">
          {title}
        </h2>
        <div className="text-sm font-body lg:text-base">
          <span className="font-bold uppercase">{firstTwoBlurb} </span>
          {restBlurb}
        </div>
        <button
          className={`flex self-center gap-1 upppercase py-2 px-3.5 bg-uaap-dark-blue text-white font-body font-bold mt-4 lg:text-2xl lg:mt-6 lg:self-${alignment == "right" ? "end" : "start"}`}
        >
          READ MORE
          <div>{">"}</div>
        </button>
      </div>
    </section>
  );
}
