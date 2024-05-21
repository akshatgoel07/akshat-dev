import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Ellipse from "../../assets/Ellipse.svg";

const BorderGlowButton = () => {
	const ref = useRef<HTMLButtonElement>(null);
	const [mousePosition, setMousePosition] = useState({
		x: "-100%",
		y: "-100%",
	});

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!ref.current) return;
			const rect = ref.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			setMousePosition({ x: `${x}px`, y: `${y}px` });
		};
		document.addEventListener("mousemove", handleMouseMove);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<motion.button
			className="relative overflow-hidden rounded-lg bg-[#e5e7eb]"
			ref={ref}
			initial={{ scale: 1 }}
			whileTap={{ scale: 0.95 }}
			transition={{
				type: "spring",
				stiffness: 500,
				damping: 20,
			}}
		>
			<span
				className={`absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#55B685_0%,transparent_70%)] `}
				style={
					{
						left: mousePosition.x,
						top: mousePosition.y,
					} as any
				}
			></span>
			<div
				className="flex gap-2 relative z-10 m-[1px] rounded-[calc(0.5rem-1px)] bg-[#ffffff]  px-4 py-1 text-sm text-[#3B3D41] backdrop-blur-sm
            "
			>
				<img src={Ellipse} alt="" />
				Open to Work
			</div>
		</motion.button>
	);
};

export default BorderGlowButton;
