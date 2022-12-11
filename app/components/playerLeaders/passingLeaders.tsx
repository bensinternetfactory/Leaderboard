const players = [
	{
		id: "1",
		rank: "1",
		name: "Patrick Mahoomes",
		yards: "3,808",
	},
	{
		id: "2",
		rank: "2",
		name: "Joe Burrow",
		yards: "3,446",
	},
	{
		id: "3",
		rank: "3",
		name: "Josh Alllen",
		yards: "3,406",
	},
	{
		id: "4",
		rank: "4",
		name: "Justin Herbert",
		yards: "3,339",
	},
	{
		id: "5",
		rank: "5",
		name: "Tom Brady",
		yards: "3,332",
	},
];

export default function PassingLeaders() {
	return (
		<section id="passing_leaders">
			<table className="w-full divide-y divide-gray-300">
				<thead className="border-t border-gray-300">
					<tr>
						<th scope="col" className="text-left grow">
							RK
						</th>
						<th scope="col" className="text-left">
							PASSING
						</th>
						<th scope="col" className="text-right">
							YDS
						</th>
					</tr>
				</thead>
				<tbody>
					{players.map((player) => (
						<tr key={player.id} className="even:bg-gray-100">
							<td className="">{player.rank}</td>
							<td>{player.name}</td>
							<td className="whitespace-nowrap text-right">{player.yards}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
