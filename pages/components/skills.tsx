import { FC } from "react";
import {
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
} from "react-icons/si";

export const Skills: FC = () => {
	return (
		<div className="pageBase">
			<h1 className="headerBase">Skills</h1>
			<ul className="grid grid-cols-3 gap-5">
				<li>
					<SiCplusplus className="skills"></SiCplusplus>
				</li>
				<li>
					<SiC className="skills"></SiC>
				</li>
				<li>
					<SiPython className="skills"></SiPython>
				</li>
				<li>
					<SiJavascript className="skills"></SiJavascript>
				</li>
				<li>
					<SiTypescript className="skills"></SiTypescript>
				</li>
				<li>
					<SiReact className="skills"></SiReact>
				</li>
				<li>
					<SiTailwindcss className="skills"></SiTailwindcss>
				</li>
				<li>
					<SiNodedotjs className="skills"></SiNodedotjs>
				</li>
				<li>
					<SiHtml5 className="skills"></SiHtml5>
				</li>
				<li>
					<SiCss3 className="skills"></SiCss3>
				</li>
			</ul>
		</div>
	);
};
