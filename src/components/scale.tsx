import { motion } from 'motion/react';

export function Scale() {
	return (
		<motion.div
			className="flex items-center justify-center size-20 rounded-lg font-semibold cursor-pointer bg-lime-400 text-lime-950"
			whileHover={{ scale: 1.2 }}
		>
			Scale
		</motion.div>
	);
}
