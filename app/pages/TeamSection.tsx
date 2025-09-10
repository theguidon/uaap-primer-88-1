import { TeamSectionHalf } from "~/components/TeamSectionHalf";
import { TeamSectionFull } from "~/components/TeamSectionFull";
import data from "../assets/data/data.json";

export function TeamSection({ sport }: { sport: keyof (typeof data) }) {
  if (sport == "cheerdance") {
    return (<TeamSectionFull
      team={data[sport]["cheerdance"].team}
      title={data[sport]["cheerdance"].title}
      blurb={data[sport]["cheerdance"].article.split("\n\n")[0]}
      slug="cheerdance"
    />);
  } else {
    return (
      <div>
        {Object.entries(data[sport]).map(([key, { team, title, article }], ix) => (
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
