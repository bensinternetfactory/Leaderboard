const players = [
	{
		id: "1",
		rank: "1",
		name: "Josh Jacobs",
		yards: "1,402",
	},
	{
		id: "2",
		rank: "2",
		name: "Nick Chubb",
		yards: "1,119",
	},
	{
		id: "3",
		rank: "3",
		name: "Derrick Henry",
		yards: "1,078",
	},
	{
		id: "4",
		rank: "4",
		name: "Saquon Barkely",
		yards: "1,055",
	},
	{
		id: "5",
		rank: "5",
		name: "Dalvin Cook",
		yards: "927",
	},
];

export default function RushingLeaders() {
	return (
		<section id="rushing_leaders">
			<table className="w-full divide-y divide-gray-300">
				<thead className="border-t border-gray-300">
					<tr>
						<th scope="col" className="text-left grow">
							RK
						</th>
						<th scope="col" className="text-left">
							RUSHING
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
