import { useState } from "react";
import { statusPeriod } from "../utils";
import Filters from "../components/Filters";
import GraphCards from "../components/GraphCards";
import DashBoardHeadline from "../components/DashBoardHeadline";

const timePeriods = ["24 hours", "7 days", "30 days", "3 month", "6 month", "12 month"];
const data = [
	{
		name: "Vendors/Supplier",
		total: 1000,
		improve: 23,
		stats: 1,
	},
	{
		name: "Customer/Dealer",
		total: 920,
		improve: 10,
		stats: 2,
	},
	{
		name: "Products SKU",
		total: 620,
		improve: 23,
		stats: 1,
	},
	{
		name: "Purchase Order",
		total: 3200,
		improve: 23,
		stats: 1,
	},
	{
		name: "Sales Order",
		total: 2000,
		improve: 23,
		stats: 1,
	},
	{
		name: ".......",
		total: 210,
		improve: 14,
		stats: 2,
	},
	{
		name: ".......",
		total: 620,
		improve: 23,
		stats: 1,
	},
	{
		name: ".......",
		total: 5200,
		improve: 23,
		stats: 1,
	},
];

const Home = () => {
	const [active, setActive] = useState(timePeriods[2]);
	const status = statusPeriod(active);

	const onClickActive = (e) => {
		const [name] = e.target.attributes;
		setActive(name.value);
	};

	return (
		<>
			<div className="flex flex-col gap-7 px-7 pt-5 pb-10 border-2 border-gray-200 rounded-lg">
				{/* section main */}
				<DashBoardHeadline title={"Dashboard"} description={"These companies have a dashboard"} />

				<div className="flex flex-col gap-5">
					<Filters data={timePeriods} onClick={onClickActive} active={active} />
					<GraphCards data={data} status={status} />
				</div>
			</div>
		</>
	);
};

export default Home;
