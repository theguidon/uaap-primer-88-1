import { TeamSectionHalf } from "~/components/team-section-half";
import { TeamSectionFull } from "~/components/team-section-full";
import { Credits } from "~/components/credits";
import data from "../assets/data/data.json";

export function Welcome() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-dvh">
      {Object.entries(data).map(([key, { team, title, article }], idx) =>
        key == "cheerdance" ? (
          <>
            <TeamSectionFull
              key={key}
              team={team}
              title={title}
              blurb={article.split("\n\n")[0]} // get first paragraph of article
              slug={key}
            />
          </>
        ) : (
          <TeamSectionHalf
            key={key}
            team={team}
            title={title}
            blurb={article.split("\n\n")[0]} // get first paragraph of article
            alignment={idx % 2 == 0 ? "right" : "left"}
            slug={key}
          />
        )
      )}
      <Credits />
    </div>
  );
}
