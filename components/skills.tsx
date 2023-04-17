import { FC } from "react";
import {
	SiC,
	SiCplusplus,
	SiCss3,
	SiExpress,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPrisma,
	SiPython,
	SiReact,
	SiSqlite,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from "react-icons/si";

export const Skills: FC = () => {
	return (
		<div className="pageBase">
			<h1 className="headerBase">Skills</h1>
			<ul className="grid grid-cols-4 gap-5">
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
					<SiNextdotjs className="skills"></SiNextdotjs>
				</li>
				<li>
					<SiVite className="skills"></SiVite>
				</li>
				<li>
					<SiNodedotjs className="skills"></SiNodedotjs>
				</li>
				<li>
					<SiExpress className="skills"></SiExpress>
				</li>
				<li>
					<SiPrisma className="skills"></SiPrisma>
				</li>
				<li>
					<SiMongodb className="skills"></SiMongodb>
				</li>
				<li>
					<SiSqlite className="skills"></SiSqlite>
				</li>
				<li>
					<SiHtml5 className="skills"></SiHtml5>
				</li>
				<li>
					<SiCss3 className="skills"></SiCss3>
				</li>
				<li>
					<SiTailwindcss className="skills"></SiTailwindcss>
				</li>
				<li>
					<SiGraphql className="skills hidden"></SiGraphql>
				</li>
				<li></li>
			</ul>
		</div>
	);
};
