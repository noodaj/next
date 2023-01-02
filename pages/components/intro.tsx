import { FC } from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

export const Intro: FC = () => {
	return (
		<div className="pageBase">
			<h1 className="headerBase">About</h1>
			<div className="-mb-20 flex-shrink-0 ">
				<h1 className="relative flex-shrink-0 text-4xl font-bold">
					Hi <span className="animate-wave">👋</span> I'm Jadon, a
					<Typewriter
						words={[" programmer.", " computer science student."]}
						loop={true}
						cursorBlinking={true}
						typeSpeed={75}
						delaySpeed={2000}
					></Typewriter>
					<Cursor cursorColor={"#c4a20a"}></Cursor>
				</h1>
				<p className="text-slate-300">
					Current computer science major at UNLV with a focus in web
					development.<br></br>I enjoy solving problems and creating
					software that users can find useful, innovating, and
					interesting.
				</p>
			</div>
		</div>
	);
};
