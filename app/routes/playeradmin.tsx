import SeasonSelectBox from "~/components/seasonSelectBox";

export default function PlayerAdmin() {
	return (
		<main className="flex flex-col gap-4">
			<header id="player_meta" className="bg-gray-400 py-8">
				<div className="container mx-auto p-4 flex flex-col gap-4">
					<div className="flex justify-between">
						<div className="flex gap-4">
							<h1 className="text-2xl">Ben Franzoso</h1>
							<span>#34</span>
						</div>
						<div className="flex">
							<SeasonSelectBox></SeasonSelectBox>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row gap-4">
						<div
							id="player_team_info"
							className="flex-1 flex flex-col gap-2 p-4 bg-gray-200 rounded">
							<span>Team: Winnacunnet</span>
							<span>Offensive Position: RB</span>
							<span>Defensive Position: DB</span>
						</div>
						<div
							id="player_season_stat_total_offense"
							className="flex-1 flex flex-col gap-2 bg-gray-200  rounded divide-y-2 divide-gray-400">
							<div className="flex flex-col gap-2 p-4">
								<span>Total Touchdowns: 27</span>
								<span>Total Yards: 1,345</span>
								<span>Total Carrys: 48</span>
							</div>
							<div className="p-4 flex">
								<span>Player Rank: 1</span>
							</div>
						</div>
						<div
							id="player_season_stat_total_defense"
							className="flex-1 flex flex-col gap-2 bg-gray-200  rounded divide-y-2 divide-gray-400">
							<div className="flex flex-col gap-2 p-4">
								<span>Total Tackles: 15</span>
								<span>Total Sacks: 0</span>
								<span>Total Interceptions: 6</span>
							</div>
							<div className="p-4 flex">
								<span>Player Rank: 3</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section id="game_stats" className="container mx-auto p-4">
				<div className="grid grid-row-3 grid-flow-col gap-4">
					<div className="flex justify-between text-lg">
						<span>Game 1</span>
						<span>vs Exeter</span>
					</div>
					<div>2</div>
					<div>3</div>
				</div>
			</section>
		</main>
	);
}
