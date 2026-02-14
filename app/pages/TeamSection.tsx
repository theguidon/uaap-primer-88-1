import { TeamSectionHalf } from "~/components/TeamSectionHalf";
import data from "../assets/data/data.json";


function getAlignment(start: "left" | "right", ix: number) {
  if (ix % 2 == 0) { return start; }
  else { return start == "left" ? "right" : "left" }
}
export function TeamSection({ sport, start = "left" }: { sport: keyof (typeof data.sports), start: "left" | "right" }) {
  return (
    <div id={sport} style={{ minHeight: "100vh" }}>
      {Object.entries(data.sports[sport].teams).map(([key, { team, title, article }], ix) => (
        <TeamSectionHalf
          key={key}
          team={team}
          title={title}
          blurb={article.split("\n\n")[0]}
          alignment={getAlignment(start, ix)}
          slug={key}
        />
      ))}
    </div>
  );
}
