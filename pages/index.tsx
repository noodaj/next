import Head from "next/head";
import { About } from "./components/about";
import { Header } from "./components/header";
import { Intro } from "./components/intro";

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)] h-screen text-white snap-mandatory">
			<Head>
				<title>Jadon's Portfolio</title>
			</Head>
			<Header />
			<Intro />
			<section id="about" className="snap-center">
				<About />
			</section>
			<section id="experience" className="snap-center"></section>
			<section id="projects" className="snap-center"></section>
			<section id="skills" className="snap-center"></section>
		</div>
	);
}
