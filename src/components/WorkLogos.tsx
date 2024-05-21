import TechKareer from "../assets/kareer.svg";
import Leapflow from "../assets/leapflow.svg";
import sabina from "../assets/sabina.svg";

const What = () => {
	return (
		<div className=" justify-between items-center mt-12 ">
			<p className="text-lg">Crafts</p>
			<div
				style={{
					borderWidth: ".5px",
					borderColor: "#2E2E2E",
					height: "150px",
					overflow: "hidden",
				}}
				className="
                flex justify-center mt-8 border rounded-lg"
			>
				<div className="flex justify-center items-center">
					<img src={TechKareer} alt="techkareer-logo" />
				</div>
			</div>
			<p className="text-sm mt-8">
				Designed Logo for a tech recruitment platform specializing in
				connecting highly skilled developers with multinational
				corporations exceeding $28 billion in valuation.
			</p>
			<div
				style={{
					borderWidth: ".5px",
					borderColor: "#2E2E2E",
					height: "250px",
					overflow: "hidden",
				}}
				className="
                flex justify-center mt-16 border rounded-lg"
			>
				<div className="flex justify-center items-center">
					<img src={Leapflow} alt="" />
				</div>
			</div>
			<p className="text-sm mt-8">
				Leapflow presented a unique challenge: to visually represent the
				power of AI integration within existing user ecosystems. For
				their logo, I focused on the concept of a seamless connection.
			</p>
			<div
				style={{
					borderWidth: ".5px",
					borderColor: "#2E2E2E",
					height: "250px",
					overflow: "hidden",
				}}
				className="
                flex justify-center mt-16 border rounded-lg"
			>
				<div className="flex justify-center items-center">
					<img src={sabina} alt="" />
				</div>
			</div>
			<p className="text-sm mt-8">
				Brand identity for a design & arts student friend from Slovakia
			</p>
		</div>
	);
};

export default What;
