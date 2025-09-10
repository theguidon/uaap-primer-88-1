import "./anims.css";
import { easeInOut, motion } from "motion/react";

export default function BloomingCircles({ outerSize, radiiGap, colors, animStagger, animSpeed, delay }: { outerSize: string, radiiGap: string, colors: string[], animStagger: number, animSpeed: number, delay: number }) {
	// note that outerSize must be divisible by radiiGap...
	// outerSize: diameter of the outermost circle
	// radiiGap: size of the "gap" between the concentric circles
	// colors: colors of the circles from outermost to innermost
	// animStagger: delay between circle blooms in ms
	// delay: delay of initial animation in ms

	return (
		<motion.div
			className="outer-circle"
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ delay: (delay / 1000), ease: easeInOut, duration: animSpeed }}
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
					<motion.div
						className="inner-circle"
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{ delay: ((animStagger * (ix + 1) + delay) / 1000), ease: easeInOut, duration: animSpeed }}
						style={{
							background: color,
							borderRadius: "50%",
							gridColumn: `${2 + ix} / ${-2 - ix}`,
							gridRow: `${2 + ix} / ${-2 - ix}`,
						}}
					></motion.div>
				)
			})}
		</motion.div>
	);
}
