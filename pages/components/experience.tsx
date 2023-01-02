import { FC } from "react";
import { SiCplusplus } from "react-icons/si";

export const Experience: FC = () => {
	return (
		<div className="pageBase">
			<h1 className="headerBase">Experience</h1>
			<article className="my-1 flex flex-shrink-0 flex-col items-center rounded-lg bg-[#292929] p-5">
				<h3 className="text-xl font-bold">Teaching Assistant</h3>
				<p className="text-xs">Aug 2022 - Present</p>
				<p>Teaching Assistant for Computer Science I</p>

				<span className="mt-3 space-y-2 text-start">
					<div className="flex items-center space-x-2">
						<h3 className="text-start">Technologies Used:</h3>
						<SiCplusplus className="h-5 w-5"></SiCplusplus>
					</div>
					<p>
						Tutored over 400+ students using a high level<br></br>
						programming language reinforcing introductory
					</p>
					<ul className="ml-5 list-disc space-y-2 text-start text-sm">
						<li>computer science skills</li>
						<li>problem-solving methods</li>
						<li>algorithm development</li>
					</ul>
				</span>
			</article>
		</div>
	);
};
