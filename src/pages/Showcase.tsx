import Techkareer from "../assets/techKareerDarker.svg";
import tedx from "../assets/tedx.png";
import docplix from "../assets/docplix.jpg";
import syntaxUI from "../assets/syntaxUI.jpg";
import akBranding from "../assets/akBranding.jpg";
import geuNotes from "../assets/geuNotes.jpg";
import buzz from "../assets/buzz.jpg";
// import techKareerDarker from "../assets/techKareerDarker.svg";
import techKareerW from "../assets/techKareerW.jpg";
import leapflow from "../assets/leapflow.svg";

import arrow from "../assets/arrow.svg";

const Showcase = () => {
	return (
		<div className="h-full bg-[#161616] ">
			<div className="p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
				<div className="flex flex-col gap-2">
					<div className="p-[1px] bg-[#1C1C1C] h-auto rounded-lg border-[1px] border-[#2E2E2E]">
						<div className="p-[4px]">
							<div className="bg-black rounded-lg">
								<div className="relative">
									<img
										src={Techkareer}
										alt="techkareer"
										className="flex w-full h-[120px] p-4"
									/>

									<div className="w-full flex flex-row justify-between absolute bottom-0 pl-3 pr-3 pb-2">
										<p className="text-sm font-light text-[#EDEDED]">
											Logo Mark
										</p>
										<p className="text-sm font-light text-[#EDEDED]">
											2024
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="pb-[2px] pl-[2px] pr-[2px]">
							<button className=" flex justify-center items-center gap-3 rounded-lg w-full h-11 bg-[#232323] text-white ">
								<p className="font-light text-sm">
									View Production
								</p>
								<img src={arrow} alt="" />
							</button>
						</div>
					</div>

					<div className="bg-[#1C1C1C] rounded-lg border-[1px] border-[#2E2E2E]">
						<div className=" p-[2px]">
							<div className="relative bg-black rounded-lg">
								<img
									src={docplix}
									alt="tedx"
									className="w-full h-auto rounded-lg"
								/>
								<div className="w-full flex flex-row justify-between absolute bottom-0 p-2">
									<p className="text-sm font-regular text-[#171717]">
										Product Design
									</p>
									<p className="text-sm text-[#6F6F6F]">
										2023
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-[#1C1C1C] h rounded-lg border-[1px] border-[#2E2E2E]">
						<div className=" p-[2px]">
							<div className="bg-black rounded-lg">
								<img
									src={akBranding}
									alt="Personal Branding"
									className="w-full h-auto"
								/>
							</div>
						</div>
					</div>

					<div className="h-[310px] rounded-lg border-[1px] border-[#2E2E2E]">
						<div className="p-[2px]">
							<div className="rounded-lg">
								<img
									src={techKareerW}
									alt="syntaxUI"
									className="w-full h-[260px] "
								/>
							</div>
						</div>

						<div className="pb-[2px] pl-[2px] pr-[2px]">
							<button className=" flex justify-center items-center gap-3 rounded-lg w-full h-11 bg-[#232323] text-white ">
								<p className="font-light text-sm">
									View Production
								</p>
								<img src={arrow} alt="" />
							</button>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<div className="bg-[#1C1C1C] rounded-lg border-[1px] border-[#2E2E2E]">
						<div className=" p-[2px]">
							<div className="relative">
								<img
									src={tedx}
									alt="tedx"
									className="w-full h-auto rounded-lg"
								/>
								<div className="w-full flex flex-row justify-between absolute bottom-0 pl-3 pr-3 pb-2">
									<p className="text-sm font-regular text-[#EDEDED]">
										Tedx Brand Kit
									</p>
									<p className="text-sm text-[#171717]">
										2022
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="h-auto rounded-lg border-[1px] border-[#2E2E2E]">
						<div className="p-[2px]">
							<div className="relative">
								<img
									src={geuNotes}
									alt="geuNotes"
									className="w-full rounded-lg"
								/>
								<div className="w-full flex flex-row justify-between absolute bottom-0 pl-3 pr-3 pb-2">
									<p className="text-sm font-regular text-[#EDEDED]">
										Dot-1
									</p>
									<p className="text-sm text-[#EDEDED]">
										2022
									</p>
								</div>
							</div>
						</div>

						<div className="pb-[2px] pl-[2px] pr-[2px]">
							<button className=" flex justify-center items-center gap-3 rounded-lg w-full h-11 bg-[#232323] text-white ">
								<p className="font-light text-sm">
									View Production
								</p>
								<img src={arrow} alt="" />
							</button>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<div className="h-[310px] rounded-lg border-[1px] border-[#2E2E2E]">
						<div className="p-[2px]">
							<div className="rounded-lg">
								<img
									src={syntaxUI}
									alt="syntaxUI"
									className="w-full h-[260px] "
								/>
							</div>
						</div>

						<div className="pb-[2px] pl-[2px] pr-[2px]">
							<button className=" flex justify-center items-center gap-3 rounded-lg w-full h-11 bg-[#232323] text-white ">
								<p className="font-light text-sm">
									View Production
								</p>
								<img src={arrow} alt="" />
							</button>
						</div>
					</div>

					<div className="bg-white h rounded-lg border-[1px] border-[#2E2E2E]">
						<div className=" p-[2px]">
							<div className="bg-black rounded-lg">
								<img
									src={buzz}
									alt="Personal Branding"
									className="w-full h-auto"
								/>
							</div>
						</div>
					</div>

					<div className="h-[260px] rounded-lg border-[1px] border-[#2E2E2E]">
						<div className="p-[2px]">
							<div className="rounded-lg">
								<img
									src={leapflow}
									alt="leapflow"
									className="w-full h-[205px] "
								/>
							</div>
						</div>

						<div className="pb-[2px] pl-[2px] pr-[2px]">
							<button className=" flex justify-center items-center gap-3 rounded-lg w-full h-11 bg-[#232323] text-white ">
								<p className="font-light text-sm">
									View Production
								</p>
								<img src={arrow} alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Showcase;
