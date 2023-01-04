import Head from "next/head";
import { Experience } from "../components/experience";
import { Header } from "../components/header";
import { Intro } from "../components/intro";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";

export default function Home() {
	return (
		<div
			className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-[rgb(36,36,36)]
		 text-white scrollbar scrollbar-track-[#242424] scrollbar-thumb-[#c4a20a]/80"
		>
			<Head>
				<title>jadon loi.</title>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<Header />
			<section id="about" className="snap-start">
				<Intro />
			</section>
			<section id="experience" className="snap-center">
				<Experience />
			</section>
			<section id="projects" className="snap-center">
				<Projects />
			</section>
			<section id="skills" className="snap-end">
				<Skills />
			</section>
		</div>
	);
}
