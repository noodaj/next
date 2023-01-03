import React, { FC } from "react";
import * as SimpleIcons from "react-icons/si";
import { Projs } from "../items/projects";

export const Projects: FC = () => {
	const icons = {
		ts: "SiTypescript",
		html: "SiHtml5",
		css: "SiCss3",
		react: "SiReact",
		js: "SiJavascript",
	};

	/*
	SiC,
	SiCplusplus,
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiNodedotjs,
	SiPython,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	*/
	
	return (
		<div className="projectBase">
			<h1 className="headerBase">Projects</h1>
			<div
				className="relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll
			 	scrollbar overflow-y-hidden scrollbar-track-[#242424] scrollbar-thumb-[#c4a20a]/80"
			>
				{Projs.map((project, i) => (
					<div
						className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5"
						key={i}
					>
						<h1 className="text-center text-4xl font-semibold underline decoration-[#c4a20a]">
							{project.name}
						</h1>

						<div className="flex flex-row items-center justify-center gap-3 text-xl font-semibold">
							Technologies:
							{project.technologies.map((tech) => {
								{
									return React.createElement(
										SimpleIcons[icons[tech]]
									);
								}
							})}
						</div>
						<p className="max-w-4xl text-center text-lg font-normal md:text-left">
							{project.description}
						</p>

						{project.finished ? (
							<a
								href={project.link}
								className="items-start justify-start rounded-full border bg-[#242424] px-5 py-2
							 hover:border-solid hover:border-blue-500 hover:bg-[#293132]"
							>
								Github Repo
							</a>
						) : (
							<button
								className="hover: cursor-pointer items-start justify-start rounded-full border bg-[#242424]
							 px-5 py-2 line-through hover:border-solid hover:border-blue-500 hover:bg-[#293132]"
							>
								Work in Progress
							</button>
						)}
					</div>
				))}
			</div>
			<div className="absolute left-0 h-[500px] w-full -skew-y-[15deg] bg-[#c4a20a]/10"></div>
		</div>
	);
};
