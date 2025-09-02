import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { useMediaQuery } from "react-responsive";
import anims from "./anims.css";

function BloomingCircles({ outerSize, radiiGap, colors, animStagger, animSpeed, delay }: { outerSize: string, radiiGap: string, colors: string[], animStagger: number, animSpeed: string, delay: number }) {
  // note that outerSize must be divisible by radiiGap...
  // outerSize: diameter of the outermost circle
  // radiiGap: size of the "gap" between the concentric circles
  // colors: colors of the circles from outermost to innermost
  // animStagger: delay between circle blooms in ms
  // delay: delay of initial animation in ms
  const circleCount = colors.length;

  return (
    <div
      className="outer-circle"
      style={{
        width: outerSize,
        height: outerSize,
        display: "grid",
        borderRadius: "50%",
        gridTemplateColumns: `repeat(auto-fill, ${radiiGap})`,
        gridTemplateRows: `repeat(auto-fill, ${radiiGap})`,
        background: `${colors[0]}`,
        animation: `${animSpeed} ease-in-out ${delay}ms 1 bloom`
      }}
    >
      {colors.slice(1).map((color: string, ix: number) => {
        return (
          <div
            className="inner-circle"
            style={{
              background: color,
              borderRadius: "50%",
              gridColumn: `${2 + ix} / ${-2 - ix}`,
              gridRow: `${2 + ix} / ${-2 - ix}`,
              animation: `${animSpeed} ease-in-out ${animStagger * (ix + 1) + delay}ms 1 bloom`
            }}
          ></div>
        )
      })}
    </div >
  );
}

export function Welcome() {
  // const isMobile = useMediaQuery({ query: '(max-width): 400px' });
  // if (!isMobile) { return <p>DESKTOP</p>; }

  return (
    <main>
      <div className="graphic">
        <BloomingCircles
          outerSize="500px"
          radiiGap="50px"
          colors={["#b7e1f2", "#56b8e1", "#0e9ad4"]}
          animStagger={100}
          animSpeed="350ms"
          delay={0}
        />
        <BloomingCircles
          outerSize="300px"
          radiiGap="30px"
          colors={["rgba(249, 218, 44, 0.3)", "rgba(249, 218, 44, 0.7)", "#f9da2c"]}
          animStagger={100}
          animSpeed="350ms"
          delay={30}
        />
      </div>
    </main>
  );
}
