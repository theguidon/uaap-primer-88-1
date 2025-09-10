import { TeamSectionHalf } from "~/components/TeamSectionHalf";
import { TeamSectionFull } from "~/components/TeamSectionFull";
import data from "../assets/data/data.json";

export function TeamSection({ sport }: { sport: keyof (typeof data.sports) }) {
  if (sport == "cheerdance") {
    return (<TeamSectionFull
      team={data.sports[sport]["cheerdance"].team}
      title={data.sports[sport]["cheerdance"].title}
      blurb={data.sports[sport]["cheerdance"].article.split("\n\n")[0]}
      slug="cheerdance"
    />);
  } else {
    return (
      <div id={sport}>
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
