import TechKareer from "../assets/techkareer.svg";
import Leapflow from "../assets/leapflow.svg";
import ak from "../assets/ak.svg";

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
				Logo design for a tech recruitment platform specializing in
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
				Leapflow's logo presented a unique challenge: to visually
				represent the power of AI integration within existing user
				ecosystems focused on the concept of a seamless connection.
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
				{/* <div className="flex justify-center items-center">
					<img src={sabina} alt="" />
				</div> */}
			</div>
			<p className="text-sm mt-8">
				Brand identity for a design & arts student friend from Slovakia
			</p>
			<div
				style={{
					borderWidth: ".5px",
					borderColor: "#2E2E2E",
					height: "250px",
					overflow: "hidden",
				}}
				className="
                flex justify-center mt-16 border rounded-lg bg-[#ffffff]"
			>
				<div className="flex justify-center items-center ">
					<img src={ak} alt="" />
				</div>
			</div>
			<p className="text-sm mt-8">Personal branding</p>
		</div>
	);
};

export default What;
