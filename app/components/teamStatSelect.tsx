const teams = [
	{
		id: "1",
		school: "Winnacunnet",
	},
	{
		id: "2",
		school: "Exeter",
	},
	{
		id: "3",
		school: "Bishop Guertin",
	},
];

export default function TeamStatSelect() {
	return (
		<select name="team_statistics" id="team_statistics">
			<option value="">Team Statistics</option>
			{teams.map((team) => (
				<option key={team.id}>{team.school}</option>
			))}
		</select>
	);
}
