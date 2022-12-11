const seasons = [
	{
		id: "1",
		year: "2022 Regular Season",
	},
	{
		id: "2",
		year: "2021 Post Season",
	},
	{
		id: "3",
		year: "2020 Regular Season",
	},
];

export default function SeasonSelectBox() {
	return (
		<select name="season_select" id="season_select">
			{seasons.map((season) => (
				<option key={season.id}>{season.year}</option>
			))}
		</select>
	);
}
