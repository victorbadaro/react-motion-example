import { motion } from 'motion/react';

export function Scale() {
	return (
		<motion.div
			animate={{
				scale: 2
			}}
		>
			Scale
		</motion.div>
	);
}
