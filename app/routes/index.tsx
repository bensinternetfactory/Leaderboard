import InterceptionLeaders from "~/components/playerLeaders/interceptionLeaders";
import PassingLeaders from "~/components/playerLeaders/passingLeaders";
import ReceivingLeaders from "~/components/playerLeaders/receivingLeaders";
import RushingLeaders from "~/components/playerLeaders/rushingLeaders";
import SackLeaders from "~/components/playerLeaders/sackLeaders";
import SeasonSelectBox from "~/components/seasonSelectBox";
import StatTypeSelect from "~/components/statTypeSelect";
import TackleLeaders from "~/components/playerLeaders/tackleLeaders";
import TeamStatSelect from "~/components/teamStatSelect";

export default function Index() {
	return (
		<main className="container mx-auto p-4 flex gap-4 flex-col">
			<header id="stat_menu" className="flex flex-col gap-4">
				<div className="flex justify-between">
					<h2>NH Stat Leaders 2022</h2>
					<TeamStatSelect></TeamStatSelect>
				</div>
				<div>
					<StatTypeSelect></StatTypeSelect>
				</div>
				<div className="flex">
					<SeasonSelectBox></SeasonSelectBox>
				</div>
			</header>
			<section className="flex flex-col lg:flex-row gap-4">
				<section id="offensive_leaders" className="flex flex-col gap-4 flex-1">
					<div className="mb-4">
						<h3>Offensive Leaders</h3>
					</div>
					<PassingLeaders></PassingLeaders>
					<RushingLeaders></RushingLeaders>
					<ReceivingLeaders></ReceivingLeaders>
				</section>
				<section id="defensive_leaders" className="flex flex-col gap-4 flex-1">
					<div className="mb-4">
						<h3>Defensive Leaders</h3>
					</div>
					<TackleLeaders></TackleLeaders>
					<SackLeaders></SackLeaders>
					<InterceptionLeaders></InterceptionLeaders>
				</section>
			</section>
		</main>
	);
}
