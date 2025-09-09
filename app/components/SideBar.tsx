import styles from "./sidebar.module.css";
import { easeInOut, motion } from "motion/react";
import { useState } from "react";

export default function SideBar() {
	const selected = useState(-1);
	const links = [
		{ name: "Cheerdance", sublinks: false },
		{ name: "Badminton", sublinks: true },
		{ name: "Basketball", sublinks: true },
		{ name: "Chess", sublinks: true },
		{ name: "Football", sublinks: true },
		{ name: "Swimming", sublinks: true },
		{ name: "Tennis", sublinks: true },
		{ name: "Track and Field", sublinks: true }
	]
	return (
		<nav>
			<section className={styles.title}>
				<div>
					<motion.h1
						initial={{ x: "-100%" }}
						animate={{ x: 0 }}
						transition={{
							duration: 0.6,
							ease: easeInOut
						}}
					>
						UAAP
					</motion.h1>
				</div>
				<div>
					<motion.h2
						initial={{ x: "-100%" }}
						animate={{ x: 0 }}
						transition={{
							duration: 0.6,
							ease: easeInOut,
							delay: 0.1,
						}}
					>
						Season 88
					</motion.h2>
				</div>
				<div>
					<motion.p
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						transition={{
							duration: 0.6,
							ease: easeInOut
						}}
					>
						First Semester Primer
					</motion.p>
				</div>
			</section>
			<ul>
				{links.map((link) => (
					<li>
						<section className={styles.navLinkTitle}>
							<p>{link.name}</p>
							{link.sublinks && <img src="/keyboard_arrow_down.svg" />}
						</section>
						{link.sublinks &&
							<ul>
								<li>Men's</li>
								<li>Women's</li>
							</ul>
						}
					</li>
				))}
			</ul>
		</nav>
	);
}
