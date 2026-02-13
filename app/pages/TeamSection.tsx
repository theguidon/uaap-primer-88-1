import { TeamSectionHalf } from "~/components/TeamSectionHalf";
import data from "../assets/data/data.json";


export function TeamSection({ sport, start = "left" }: { sport: keyof (typeof data.sports), start: "left" | "right" }) {
  if (Object.values(data.sports[sport].teams).length == 1) {
    // @ts-ignore
    const sportData = Object.values(data.sports[sport].teams)[0];
    return (
      <div id={sport} style={{ maxHeight: "50vh", minHeight: "50vh" }}>
        <TeamSectionHalf
          team={sportData.team}
          title={sportData.title}
          blurb={sportData.article.split("\n\n")[0]}
          alignment={start}
          slug={sport}
        />
      </div>);
  } else {
    return (
      <div id={sport} style={{ minHeight: "100vh" }}>
        {Object.entries(data.sports[sport].teams).map(([key, { team, title, article }], ix) => (
          <TeamSectionHalf
            key={key}
            team={team}
            title={title}
            blurb={article.split("\n\n")[0]}
            alignment={ix == 0 ? "left" : "right"}
            slug={key}
          />
        ))}
      </div>
    );
  }
}
