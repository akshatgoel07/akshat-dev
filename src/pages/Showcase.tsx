import leapflow from "../assets/leapflow.svg";
import moodDetection from "../assets/moodDetection.svg";
import macStudio from "../assets/macStudio.jpg";
import portfolioTemp from "../assets/portfolioTemp.jpg";
import http from "../assets/http.svg";
import incredulus from "../assets/incredulus.jpg";
import concertLabs from "../assets/concertLabs.jpg";
import tedX from "../assets/tedX.jpg";
import deland from "../assets/deland.jpg";
import syntax from "../assets/syntax.svg";
import ak from "../assets/ak.svg";
import techkareer from "../assets/techK.svg";

const Showcase = () => {
	const showcaseItems = [
		{
			name: "Emotion Detection App",
			year: "2023",
			img: moodDetection,
		},
		{
			name: "Founding Engineer",
			year: "2024",
			img: leapflow,
		},
		{
			name: "Product Design",
			year: "2023",
			img: macStudio,
		},
		{
			name: "Next.js Project",
			year: "2024",
			img: portfolioTemp,
		},
		{
			name: "Personal Branding",
			year: "2024",
			img: ak,
		},

		{
			name: "TCP Server",
			year: "2024",
			img: http,
		},
		{
			name: "Branding Kit",
			year: "2023",
			img: tedX,
		},
		{
			name: "Tech Kareer",
			year: "2024",
			img: techkareer,
		},
		{
			name: "Designer",
			year: "2024",
			img: incredulus,
		},
		{
			name: "React.js Project",
			year: "2023",
			img: concertLabs,
		},
		{
			name: "Education Platform",
			year: "2022",
			img: deland,
		},
		{
			name: "Open Source Contributor",
			year: "2024",
			img: syntax,
		},
	];

	const columns = [[], [], []];
	showcaseItems.forEach((item, index) => {
		columns[index % 3].push(item);
	});

	return (
		<div className="bg-[#161616] p-3.5">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5">
				{columns.map((column, columnIndex) => (
					<div key={columnIndex} className="flex flex-col gap-1.5">
						{column.map((item, itemIndex) => (
							<div
								key={itemIndex}
								className="p-1 bg-[#1C1C1C] rounded-lg border border-[#2E2E2E]"
							>
								<div className="relative overflow-hidden rounded-lg">
									<img
										src={item.img}
										alt={item.name}
										className="w-full h-auto"
									/>
									<div className="absolute bottom-0 w-full flex justify-between items-center p-2.5 pt-10 bg-gradient-to-t from-black/60 to-transparent">
										<h3 className="text-sm font-normal text-[#EDEDED]">
											{item.name}
										</h3>
										<h4 className="text-sm text-[#EDEDED]">
											{item.year}
										</h4>
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Showcase;
