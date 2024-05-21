import Meteors from "../components/meteors";

const Landing = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-screen bg-black">
			<div className=" relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
				<Meteors number={30} />
				<p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
					WIP
				</p>
			</div>
		</div>
	);
};

export default Landing;
