import { motion } from 'motion/react';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface FadeOutProps extends ComponentProps<'div'> {
	value?: number;
}

export function FadeOut({ value = 0.2, className }: FadeOutProps) {
	return (
		<motion.div
			className={twMerge('flex flex-col items-center justify-center size-20 rounded-lg font-semibold cursor-pointer bg-lime-400 text-lime-950', className)}
			whileHover={{
				opacity: value
			}}
			whileTap={{
				opacity: value * 2
			}}
		>
			FadeOut
			<span className="text-xs font-normal">{value}</span>
		</motion.div>
	);
}
