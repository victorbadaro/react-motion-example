import { motion } from 'motion/react';

interface ScaleProps {
	value?: number;
}

export function Scale({ value = 1.2 }: ScaleProps) {
	return (
		<motion.div
			className="flex flex-col items-center justify-center size-20 rounded-lg font-semibold cursor-pointer bg-lime-400 text-lime-950"
			whileHover={{
				scale: value
			}}
			whileTap={{
				scale: value - 0.1
			}}
		>
			Scale
			<span className="text-xs font-normal">{value}x</span>
		</motion.div>
	);
}
