import { motion } from 'motion/react';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface ScaleProps extends ComponentProps<'div'> {
	value?: number;
}

export function Scale({ value = 1.2, className }: ScaleProps) {
	return (
		<motion.div
			className={twMerge('flex flex-col items-center justify-center size-20 rounded-lg font-semibold cursor-pointer bg-lime-400 text-lime-950', className)}
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
