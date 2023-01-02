import { FC } from "react";

export const About: FC = () => {
	return (
		<div className="m-auto flex max-w-7xl items-center justify-center px-10">
			<h1 className="absolute top-48 text-3xl font-semibold uppercase tracking-[15px] text-zinc-600">
				About
			</h1>
			<div className="relative top-14">
				<h4 className="text-xl font-semibold">
					Here is a
					<span className="underline decoration-[#c4a20a]">
						little
					</span>
					background about me
				</h4>
			</div>
		</div>
	);
};
