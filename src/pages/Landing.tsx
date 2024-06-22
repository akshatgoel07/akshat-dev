import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import akLogo from "../assets/akLogo.svg";

const COLORS = {
	TEXT_GRAY: "#5C5C5C",
	TEXT_BLACK: "#000000",
};

const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
			delay: 0.3,
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const SectionTitle = ({ children }: any) => (
	<p className="font-medium">{children}</p>
);

const ExternalLink = ({ href, children }: any) => (
	<a
		target="_blank"
		rel="noopener noreferrer"
		href={href}
		className="underline"
	>
		{children}
	</a>
);

const Landing = () => {
	return (
		<div className="flex justify-center h-screen mt-10">
			<div className="w-full md:w-[650px] p-4">
				<img src={akLogo} alt="Akshat Goel's logo" />
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.p variants={itemVariants} className="mt-5 text-lg">
						Akshat Goel
					</motion.p>
					<motion.p
						variants={itemVariants}
						className="mt-1 text-[#5C5C5C]"
					>
						Engineer & Designer
					</motion.p>
					<motion.div
						variants={itemVariants}
						className="text-[#5C5C5C]"
					>
						<p className="mt-8">
							Hi there, I'm{" "}
							<span className="text-[#000000]">Akshat</span> a
							software engineer and designer, I'm interested in
							working at the intersection of{" "}
							<span className="text-[#000000] font-base">
								design and code
							</span>{" "}
							whether it be from{" "}
							<span className="text-[#000000]">
								user interfaces, software development
							</span>{" "}
							(ai/ml, web2, web3).
						</p>
					</motion.div>
					<motion.div variants={itemVariants} className="mt-10">
						<button className="h-auto w-[200px] text-left block">
							<Link to="/showcase">
								<p className="font-medium underline leading-8">
									Projects
								</p>
								<p className="text-sm">Carousel of my work</p>
							</Link>
						</button>
						<button className="mt-10 text-left block">
							<Link to="/showcase">
								<p className="font-medium underline leading-8">
									Notes
								</p>
								<p className="text-sm">Personal Notes</p>
							</Link>
						</button>
					</motion.div>
					<motion.div variants={itemVariants} className="mt-20">
						<div className="mt-2">
							<SectionTitle>Elsewhere</SectionTitle>
							<p className="mt-2">
								Check out some things I coded on{" "}
								<ExternalLink href="https://github.com/akshatgoel07">
									GitHub
								</ExternalLink>{" "}
								or view my latest thoughts on{" "}
								<ExternalLink href="https://x.com/akshatgoel0">
									Twitter
								</ExternalLink>{" "}
								also you can find my professional experience on{" "}
								<ExternalLink href="https://www.linkedin.com/in/akshatgoel7">
									LinkedIn
								</ExternalLink>
								.
							</p>
						</div>
						<div className="mt-10">
							<SectionTitle>Motion</SectionTitle>
							<p className="mt-2">
								Apart from working as a software developer, I
								also enjoy the process of
								<span className="text-[#000000] font-base">
									{" "}
									motion design
								</span>
								, I have worked with brands to create motion for
								an audience of over
								<span className="text-[#000000] font-base">
									{" "}
									100 Million.
								</span>
							</p>
						</div>
						<div className="mt-10">
							<SectionTitle>Opportunity</SectionTitle>
							<p className="mt-2">
								If you have any opportunity that might excite me
								reach me out at akshathg7@gmail.com or dm me on{" "}
								<ExternalLink href="https://x.com/akshatgoel0">
									Twitter
								</ExternalLink>
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="flex mt-20 justify-between text-sm"
					>
						<p>Embrace Boredom</p>
						<p>
							<ExternalLink href="https://github.com/akshatgoel07/akshat-dev">
								ak/site
							</ExternalLink>
						</p>
					</motion.div>
					<div className="h-16"></div>
				</motion.div>
			</div>
		</div>
	);
};

export default React.memo(Landing);
