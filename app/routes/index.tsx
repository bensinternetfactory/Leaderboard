import PassingLeaders from "~/components/passingLeaders";
import RushingLeaders from "~/components/rushingLeaders";

export default function Index() {
	return (
		<main className="container mx-auto p-4 flex flex-row gap-4">
			<section id="offensive_leaders" className="flex flex-col gap-4 flex-1">
				<div className="mb-4">
					<h2>Offensive Leaders</h2>
				</div>
				<PassingLeaders></PassingLeaders>
				<RushingLeaders></RushingLeaders>
				<div>3</div>
			</section>
			<section id="defensive_leaders" className="flex flex-col gap-4 flex-1">
				<div className="mb-4">
					<h2>Defensive Leaders</h2>
				</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
			</section>
		</main>
	);
}
