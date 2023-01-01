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
		<header className="sticky flex flex-row m-auto justify-between max-w-7xl p-5">
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
			<div className="flex m-auto">
				<Link href="#about">
					<button className="button">About</button>
				</Link>
				<Link href="#about">
					<button className="button">Experience</button>
				</Link>
				<Link href="#about">
					<button className="button">Projects</button>
				</Link>
				<Link href="#about">
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
				<HiOutlineDocument
					style={iconStyle}
					className="hover:cursor-pointer"
					//add resume to download
				></HiOutlineDocument>
			</div>
		</header>
	);
};
