import { Link } from "react-router-dom";

export default function StatTypeSelect() {
	return (
		<div className="flex">
			<Link to="#" className="flex-1 text-center">
				Player
			</Link>
			<Link to="#" className="flex-1 text-center">
				Team
			</Link>
		</div>
	);
}
