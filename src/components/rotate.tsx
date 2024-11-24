import { motion } from 'motion/react';

interface RotateProps {
	value?: number;
}

export function Rotate({ value = 90 }: RotateProps) {
	return (
		<motion.div
			className="flex flex-col items-center justify-center size-20 rounded-lg font-semibold cursor-pointer bg-lime-400 text-lime-950"
			whileHover={{
				rotate: value
			}}
			whileTap={{
				rotate: value / 2
			}}
		>
			Rotate
			<span className="text-xs font-normal">{value} deg</span>
		</motion.div>
	);
}
