import { FC } from "react";

export const About: FC = () => {
	return (
		<div className="pageBase">
			<h1 className="headerBase">About</h1>
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
