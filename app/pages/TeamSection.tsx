import { TeamSectionHalf } from "~/components/TeamSectionHalf";
import data from "../assets/data/data.json";


export function TeamSection({ sport, start = "left" }: { sport: keyof (typeof data.sports), start: "left" | "right" }) {
  if (Object.values(data.sports[sport]).length == 1) {
    const sportData = Object.entries(data.sports[sport])[0][1];
    return (<TeamSectionHalf
      team={sportData.team}
      title={sportData.title}
      blurb={sportData.article.split("\n\n")[0]}
      alignment={start}
      slug={sport}
    />);
  } else {
    return (
      <div id={sport} style={{ minHeight: "100vh" }}>
        {Object.entries(data.sports[sport]).map(([key, { team, title, article }], ix) => (
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
