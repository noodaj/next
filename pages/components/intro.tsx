import { Typewriter, Cursor } from "react-simple-typewriter";

export const Intro = () => {
	return (
		<div className="max-w-7xl m-auto p-5 flex flex-col items-center">
			<h1 className="text-2xl font-bold">
				Hi <span className="">👋</span> I'm Jadon, a
				<Typewriter
					words={[" programmer.", " computer science student."]}
					loop={true}
					cursorBlinking={true}
					typeSpeed={75}
					delaySpeed={2000}
				></Typewriter>
				<Cursor cursorColor={"#c4a20a"}></Cursor>
			</h1>
			<h1>
				I enjoy solving problems and creating software that users can
				find useful, innovating, and interesting.
			</h1>
		</div>
	);
};
