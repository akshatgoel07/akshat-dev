// import Eclipse from "../assets/Ellipse.svg";
import Logo from "../assets/logo.svg";

import BorderGlowButton from "./Buttons/BorderGlowButton";

import { Toaster, toast } from "sonner";

const Head = () => {
	return (
		<div>
			<div className="flex justify-between items-center">
				<div>
					<img src={Logo} alt="" />
				</div>

				<Toaster position="bottom-center" />
				<div className="flex gap-2 text-black">
					<button
						onClick={() => toast("There are 2 open spots for May.")}
					>
						<BorderGlowButton />
						{/* <img src={Eclipse} alt="" /> Open to work */}
					</button>
				</div>
			</div>
			<div className="flex justify-between items-center mt-7">
				Frontend Focused Full-stack developer
			</div>
			<div className="mt-5 text-base">
				Hi! I am Akshat a designer and developer, My field of interests
				is quite extensive, ranging from web development and creative
				coding to motion design, and UI/UX.
			</div>
			{/* <div className="mt-5">
				Our team is made up of world-class designers and developers from
				all over the world, from Paris to California to Bangalore. This
				global perspective allows us to bring a unique blend of ideas
				and experiences to our projects.
			</div> */}
		</div>
	);
};

export default Head;
