import Head from "../components/Head-Logos";
import What from "../components/Work-Logos";
import Footer from "../components/Footer";

const Logos = () => {
	return (
		<div>
			<div>
				<div className="flex justify-center  h-screen mt-10">
					<div className="lg:w-2/5 md:w-3/6 sm:w-4/6  p-4 ">
						<Head />
						<What />
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Logos;
