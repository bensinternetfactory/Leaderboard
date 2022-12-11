const players = [
	{
		id: "1",
		rank: "1",
		name: "C.J. Gardner-Johnson",
		yards: "6",
	},
	{
		id: "2",
		rank: "2",
		name: "Tariq Woolen",
		yards: "6",
	},
	{
		id: "3",
		rank: "3",
		name: "Harrison Smith",
		yards: "5",
	},
	{
		id: "4",
		rank: "4",
		name: "Jordan Poyer",
		yards: "4",
	},
	{
		id: "5",
		rank: "5",
		name: "Vonn Bell",
		yards: "4",
	},
];

export default function InterceptionLeaders() {
	return (
		<section id="interception_leaders">
			<table className="w-full divide-y divide-gray-300">
				<thead className="border-t border-gray-300">
					<tr>
						<th scope="col" className="text-left grow">
							RK
						</th>
						<th scope="col" className="text-left">
							INTERCEPTIONS
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
