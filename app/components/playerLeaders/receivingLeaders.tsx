const players = [
	{
		id: "1",
		rank: "1",
		name: "Tyreek Hill",
		yards: "1,379",
	},
	{
		id: "2",
		rank: "2",
		name: "Justin Jefferson",
		yards: "1,277",
	},
	{
		id: "3",
		rank: "3",
		name: "Davante Adams",
		yards: "1,247",
	},
	{
		id: "4",
		rank: "4",
		name: "Stefon Diggs",
		yards: "1,202",
	},
	{
		id: "5",
		rank: "5",
		name: "Jaylen Waddle",
		yards: "972",
	},
];

export default function ReceivingLeaders() {
	return (
		<section id="receiving_leaders">
			<table className="w-full divide-y divide-gray-300">
				<thead className="border-t border-gray-300">
					<tr>
						<th scope="col" className="text-left grow">
							RK
						</th>
						<th scope="col" className="text-left">
							RECEIVING
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
