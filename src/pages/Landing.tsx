import akLogo from "../assets/akLogo.svg";

const Landing = () => {
	interface DataItem {
		title: string;
		description: string;
	}
	const dataList: DataItem[] = [
		{ title: "Projects", description: "Experiments with design and dev" },
		{
			title: "Showcase",
			description: "Carousel of my work ",
		},
		{
			title: "Notes",
			description: "Personal notes",
		},
		// Add more data objects as needed
	];
	return (
		<div className="flex justify-center  h-screen mt-20">
			<div className="lg:w-2/5 md:w-3/6 sm:w-4/6  p-4 ">
				<img src={akLogo} alt="" />
				<p className="mt-10 text-lg">Akshat Goel</p>
				<p className="mt-2 text-sm text	-[#5C5C5C] font-light">
					Engineer & Designer
				</p>
				<div className="text-base text-[#272727]">
					<p className="mt-10 ">
						Hi, hello, Konnichiwa. Im Akshat goel a software
						engineer.
					</p>
					{/* <p className="mt-2">
						Crafting interfaces and building softwares.
					</p> */}
					<p className="mt-2 text-light">
						Interested in working at the intersection of design and
						development weather it be from user interfaces, motion
						design or software dev.
					</p>
				</div>
				<div className="mt-20 cursor-pointer">
					{dataList.map((dataItem) => (
						<div key={dataItem.title} className="mt-10">
							<p className="text-base font-medium">
								{dataItem.title}
							</p>
							<p className="font-light text-sm">
								{dataItem.description}
							</p>
						</div>
					))}
				</div>
				<div className="mt-20">
					<div className="mt-2">
						<p className="text-base ">Elseware</p>
						<p className="text-sm mt-2">
							Check out some things I coded on{" "}
							<a
								target="_blank"
								href="https://github.com/akshatgoel07"
								className="underline"
							>
								GitHub
							</a>{" "}
							or view my latest thoughts on{" "}
							<a
								target="_blank"
								href="https://x.com/akshatgoel0"
								className="underline"
							>
								Twitter
							</a>{" "}
							also you can find my professional experience on{" "}
							<a
								target="_blank"
								href="https://www.linkedin.com/in/akshatgoel7"
								className="underline"
							>
								Linkedin
							</a>{" "}
							.
						</p>
					</div>
					<div className="mt-10">
						<p className="text-base ">Motion</p>
						<p className="text-sm mt-2">
							Apart from working as a software developer, I also
							enjoy the process of motion design, I have worked
							with brands to create motion for an audience of over
							100 Million.
						</p>
					</div>
					<div className="mt-10">
						<p className="text-base ">Opportunity</p>
						<p className="text-sm mt-2">
							If you have any opportunity that might excite me
							reach me out akshathg7@gmail.com or schedule a call
							here .
						</p>
					</div>
				</div>
				<div className="flex mt-20 justify-between text-sm">
					<p>Embrace Boredom</p>
					<p>ak/site</p>
				</div>
				<div className="h-10"></div>
			</div>
		</div>
	);
};

export default Landing;
