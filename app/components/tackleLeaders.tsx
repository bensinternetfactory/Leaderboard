const players = [
	{
		id: "1",
		rank: "1",
		name: "Rashaan Evans",
		yards: "134",
	},
	{
		id: "2",
		rank: "2",
		name: "Zaire Franklin",
		yards: "131",
	},
	{
		id: "3",
		rank: "3",
		name: "Jordyn Brooks",
		yards: "131",
	},
	{
		id: "4",
		rank: "4",
		name: "Foyesade Olukun",
		yards: "128",
	},
	{
		id: "5",
		rank: "5",
		name: "Nick Bolton",
		yards: "122",
	},
];

export default function TackleLeaders() {
	return (
		<section id="tackle_leaders">
			<table className="w-full divide-y divide-gray-300">
				<thead className="border-t border-gray-300">
					<tr>
						<th scope="col" className="text-left grow">
							RK
						</th>
						<th scope="col" className="text-left">
							TACKLES
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
