import { motion } from 'motion/react';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface FadeInProps extends ComponentProps<'div'> {
	value?: number;
}

export function FadeIn({ value = 1, className }: FadeInProps) {
	return (
		<motion.div
			className={twMerge(
				'flex flex-col items-center justify-center size-20 rounded-lg font-semibold cursor-pointer opacity-20 bg-lime-400 text-lime-950',
				className
			)}
			whileHover={{
				opacity: value
			}}
			whileTap={{
				opacity: value / 2
			}}
		>
			FadeIn
			<span className="text-xs font-normal">{value}</span>
		</motion.div>
	);
}
