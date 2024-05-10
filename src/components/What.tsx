import TechKareer from "../assets/techKareer.svg";
import Tedx from "../assets/tedx.png";

const What = () => {
	return (
		<div className=" justify-between items-center mt-12 ">
			<p className="text-lg">So What do we Do?</p>
			<p className="text-base mt-4">We make designs that inspire </p>
			<div
				style={{
					borderWidth: ".5px",
					borderColor: "#2E2E2E",
					height: "150px",
					overflow: "hidden",
				}}
				className="
                flex justify-center mt-4 border rounded-lg"
			>
				<div className="flex justify-center items-center">
					<img src={TechKareer} alt="" />
				</div>
			</div>
			<p className="text-sm mt-4 text-[#BFBFC0]">
				Logo design techkareer Startup that help hire developers for
				Multi national corporations valued over $28B.
			</p>
			<div
				style={{
					borderWidth: ".5px",
					borderColor: "#2E2E2E",
					height: "480px",
					overflow: "hidden",
				}}
				className="
                flex justify-center mt-10 border rounded-lg"
			>
				<div className="flex justify-center items-center">
					<img src={Tedx} alt="" />
				</div>
			</div>
			<p className="text-sm mt-4 text-[#BFBFC0]">
				We shaped TEDx Horizon's vision by creating its brand identity,
				motion design, development of the event's website.
			</p>
		</div>
	);
};

export default What;
