import { Link } from "react-router-dom";
import akLogo from "../assets/akLogo.svg";

const Landing = () => {
	return (
		<div className="flex justify-center  h-screen mt-10">
			<div className="lg:w-3/6 md:w-3/6 sm:w-4/6  p-4 ">
				<img src={akLogo} alt="logo" />
				<p className="mt-5 text-lg">Akshat Goel</p>
				<p className="mt-1   text-[#5C5C5C]">Engineer & Designer</p>
				<div className="  text-[#5C5C5C] ">
					<p className="mt-8 ">
						Hi there, I'm{" "}
						<span className="text-[#000000] ">Akshat</span> a
						software engineer and designer, I'm Interested in
						working at the intersection of{" "}
						<span className="text-[#000000] font-base	">
							{" "}
							design and code{" "}
						</span>
						weather it be from{" "}
						<span className="text-[#000000] ">
							{" "}
							user interfaces, software development
						</span>{" "}
						(ai/ml, web2, web3).
					</p>
					<p className="mt-1">
						Note: showcase and notes section is work in progress
					</p>
					<p className="mt-2 text-light"></p>
				</div>
				{/* <div className="">add projects grid here </div> */}
				<div className="mt-20">
					<div className="h-auto w-[200px]">
						<Link to="/showcase">
							<p className="  font-medium underline leading-8 ">
								Showcase
							</p>
							<p className="text-sm">Carousel of my work</p>
						</Link>
					</div>
					<div className="mt-10">
						<p className="  font-medium">Notes</p>
						<p className="font-light text-sm">Personal notes</p>
					</div>
				</div>
				<div className="mt-20">
					<div className="mt-2">
						<p className="  ">Elseware</p>
						<p className="  mt-2">
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
						<p className="  ">Motion</p>
						<p className="  mt-2">
							Apart from working as a software developer, I also
							enjoy the process of
							<span className="text-[#000000] font-base">
								{" "}
								motion design
							</span>
							, I have worked with brands to create motion for an
							audience of over
							<span className="text-[#000000] font-base">
								100 Million.
							</span>
						</p>
					</div>
					<div className="mt-10">
						<p className="  ">Opportunity</p>
						<p className="  mt-2">
							If you have any opportunity that might excite me
							reach me out akshathg7@gmail.com or dm me on{" "}
							<a
								target="_blank"
								href="https://x.com/akshatgoel0"
								className="underline"
							>
								Twitter
							</a>{" "}
						</p>
					</div>
				</div>
				<div className="flex mt-20 justify-between text-sm">
					<p>Embrace Boredom</p>
					<p>
						<a
							target="_blank"
							href="https://github.com/akshatgoel07/akshat-dev"
							className="underline"
						>
							ak/site
						</a>
					</p>
				</div>
				<div className="h-10"></div>
			</div>
		</div>
	);
};

export default Landing;
