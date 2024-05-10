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
				Your Vision – Crafted to Perfection
			</div>
			<div className="mt-5 text-base">
				マック (Mac) Studio is a design-led studio dedicated to
				partnering with innovative tech startups, small business',
				brands & companies. Providing top-tier quality services in
				product design, branding, motion graphics and development.
			</div>
			<div className="mt-5">
				Our team is made up of world-class designers and developers from
				all over the world, from Paris to California to Bangalore. This
				global perspective allows us to bring a unique blend of ideas
				and experiences to our projects.
			</div>
		</div>
	);
};

export default Head;
