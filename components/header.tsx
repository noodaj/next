import Link from "next/link";
import { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HiOutlineDocument } from "react-icons/hi2";
import { SocialIcon } from "react-social-icons";

type Props = {};
export const Header: FC<Props> = () => {
	const [copied, setCopied] = useState<boolean>(false);

	const hideMessage = () => {
		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	let iconStyle = { color: "gray", height: "25px", width: "25px" };
	return (
		<header className="sticky top-0 z-10 m-auto flex max-w-7xl flex-row justify-between py-2">
			<div>
				<SocialIcon
					url="https://www.linkedin.com/in/jadon-loi-a52193260/"
					fgColor="gray"
					bgColor="transparent"
				></SocialIcon>
				<SocialIcon
					url="https://github.com/noodaj"
					fgColor="gray"
					bgColor="transparent"
				></SocialIcon>
			</div>
			<div className="m-auto flex">
				<Link href="#about">
					<button className="button">About</button>
				</Link>
				<Link href="#experience">
					<button className="button">Experience</button>
				</Link>
				<Link href="#projects">
					<button className="button">Projects</button>
				</Link>
				<Link href="#skills">
					<button className="button">Skills</button>
				</Link>
			</div>
			<div className="flex items-center gap-3">
				<CopyToClipboard
					text="jadon.loi.68@gmail.com"
					onCopy={() => {
						setCopied(true);
						hideMessage();
					}}
				>
					<SocialIcon
						network="email"
						fgColor="gray"
						bgColor="transparent"
						className="cursor-pointer"
					>
						{copied && <p className="my-8 mx-1 text-xs">Copied</p>}
					</SocialIcon>
				</CopyToClipboard>
				<div className="flex flex-col space-x-2 hover:cursor-pointer">
					<HiOutlineDocument
						style={iconStyle}
						//add resume to download
					></HiOutlineDocument>
				</div>
			</div>
		</header>
	);
};
