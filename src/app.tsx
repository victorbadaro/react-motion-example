import { Scale } from './components/scale';

export function App() {
	return (
		<main className="min-h-screen bg-zinc-950 text-zinc-50">
			<div className="container mx-auto px-6 py-10">
				<div className="space-y-8">
					<h1 className="text-4xl font-semibold">Motion animations</h1>

					<Scale />
				</div>
			</div>
		</main>
	);
}
