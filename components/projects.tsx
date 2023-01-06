import React, { FC } from "react";
import * as SimpleIcons from "react-icons/si";
import { Projs } from "../items/projects";

export const Projects: FC = () => {
	const icons: any = {
		ts: "SiTypescript",
		html: "SiHtml5",
		css: "SiCss3",
		react: "SiReact",
		js: "SiJavascript",
		next: "SiNextdotjs",
		tailwind: "SiTailwindcss",
		mongodb: "SiMongodb",
		express: "SiExpress",
		gql: "SiGraphql",
		sqlite: "SiSqlite",
		prisma: "SiPrisma",
	};

	return (
		<div className="relative m-auto flex h-screen flex-col items-center justify-evenly space-y-7 overflow-hidden text-center">
			<h1 className="headerBase">Projects</h1>
			<div
				className="scroll z-20 relative flex w-full snap-x snap-mandatory overflow-x-scroll
			 	scrollbar overflow-y-hidden scrollbar-track-[#242424] scrollbar-thumb-[#c4a20a]/80 sm:z-9 md:w-full"
			>
				{Projs.map((project, i) => (
					<div
						className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5"
						key={i}
					>
						<h1 className="text-center text-2xl font-semibold underline decoration-[#c4a20a] sm:text-3xl md:text-4xl">
							{project.name}
						</h1>

						<div
							className="flex flex-row items-center justify-center gap-3 text-lg font-semibold sm:text-xl"
							key={i}
						>
							Technologies:
							{project.technologies.map((tech) => {
								return React.createElement(
									SimpleIcons[
										icons[tech] as keyof typeof SimpleIcons
									]
								);
							})}
						</div>
						<p className="max-w-[300px] text-left text-base font-normal xs:max-w-lg xs:text-center sm:max-w-xl md:max-w-2xl lg:max-w-4xl lg:text-lg">
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
