const players = [
	{
		id: "1",
		rank: "1",
		name: "Nick Bosa",
		yards: "14.5",
	},
	{
		id: "2",
		rank: "2",
		name: "Matthew Judon",
		yards: "13.0",
	},
	{
		id: "3",
		rank: "3",
		name: "Micah Parsons",
		yards: "12.0",
	},
	{
		id: "4",
		rank: "4",
		name: "Maxx Crosby",
		yards: "11.5",
	},
	{
		id: "5",
		rank: "5",
		name: "Chris Jones",
		yards: "10.0",
	},
];

export default function SackLeaders() {
	return (
		<section id="sack_leaders">
			<table className="w-full divide-y divide-gray-300">
				<thead className="border-t border-gray-300">
					<tr>
						<th scope="col" className="text-left grow">
							RK
						</th>
						<th scope="col" className="text-left">
							SACKS
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
