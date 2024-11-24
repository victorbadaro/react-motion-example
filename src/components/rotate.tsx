import { motion } from 'motion/react';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface RotateProps extends ComponentProps<'div'> {
	value?: number;
}

export function Rotate({ value = 90, className }: RotateProps) {
	return (
		<motion.div
			className={twMerge('flex flex-col items-center justify-center size-20 rounded-lg font-semibold cursor-pointer bg-lime-400 text-lime-950', className)}
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
