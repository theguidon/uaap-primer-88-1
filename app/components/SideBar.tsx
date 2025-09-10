import styles from "./sidebar.module.css";
import { easeInOut, motion } from "motion/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function SideBar({ visible, setVisibility }: { visible: boolean, setVisibility: (isVisible: boolean) => void }) {
	const [selected, setSelected] = useState(-1);
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

	function select(hasLinks: boolean, ix: number) {
		setSelected(hasLinks ? ix : -1);
	}
	return (
		<nav
			style={{
				left: (visible ? 0 : "-100%")
			}}
		>
			<button
				style={{
					marginLeft: 40,
					marginBottom: 28,
					cursor: "pointer"
				}}

				onClick={() => setVisibility(false)}
			>
				<IoClose color="white" size={32} />
			</button>
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
				{links.map((link, ix) => (
					<li className={selected == ix ? styles.selected : ''}>
						<section
							className={styles.navLinkTitle}
							onClick={() => select(link.sublinks, ix)}
						>
							<p>{link.name}</p>
							{link.sublinks && <img src="/keyboard_arrow_down.svg" />}
						</section>
						{
							link.sublinks &&
							<ul>
								<li>
									<a
										href={`#mens-${link.name.split(' ').join('-').toLowerCase()}`}>
										Men's {link.name}
									</a>
								</li>
								<li>
									<a
										href={`#womens-${link.name.split(' ').join('-').toLowerCase()}`}>
										Women's {link.name}
									</a>
								</li>
							</ul>
						}
					</li>
				))}
			</ul>
		</nav >
	);
}
