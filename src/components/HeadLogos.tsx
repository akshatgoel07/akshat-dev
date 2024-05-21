// import Eclipse from "../assets/Ellipse.svg";
import Logo from "../assets/logo.svg";

import BorderGlowButton from "./Buttons/BorderGlowButton";

import { Toaster, toast } from "sonner";

const Head = () => {
	return (
		<div className="">
			<div className="flex justify-between items-center">
				<div>
					<img src={Logo} alt="" />
				</div>

				<Toaster position="bottom-center" />
				<div className="flex gap-2">
					<button
						onClick={() =>
							toast(
								"Available for Logo design work @ 40$ per design",
							)
						}
					>
						<BorderGlowButton />
					</button>
				</div>
			</div>
			<div className="flex justify-between items-center mt-7 text-xl font-medium">
				Brand Identity
			</div>
			<div className="mt-5 text-base font-light">
				My logo perferences are typographic and minimalistic, I do brand
				designs which resonate with the function of the brand
			</div>
		</div>
	);
};

export default Head;
