import { FadeIn } from './components/fade-in';
import { FadeOut } from './components/fade-out';
import { Rotate } from './components/rotate';
import { Scale } from './components/scale';

export function App() {
	return (
		<main className="min-h-screen bg-zinc-950 text-zinc-50">
			<div className="container mx-auto px-6 py-10">
				<div className="space-y-8">
					<h1 className="text-4xl font-semibold">Motion animations</h1>

					<div className="flex flex-wrap items-center justify-start gap-4">
						<Scale />
						<Rotate />
						<FadeOut />
						<FadeIn />
					</div>
				</div>
			</div>
		</main>
	);
}
