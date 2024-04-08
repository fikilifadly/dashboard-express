import { useState } from "react";
import { statusPeriod } from "../utils";
import Filters from "../components/Filters";
import GraphCards from "../components/GraphCards";
import DashBoardHeadline from "../components/DashBoardHeadline";

// Hardcode Data

const timePeriods = ["24 hours", "7 days", "30 days", "3 month", "6 month", "12 month"];
const dataLine = [
	{
		name: "Vendors/Supplier",
		total: 1000,
		improve: 23,
		datasets: [
			{
				data: [1, 5, 2, 9],
				borderColor: "green",
			},
		],
		labels: ["1", "2", "3", "4"],
		stats: 1,
	},
	{
		name: "Customer/Dealer",
		total: 920,
		datasets: [
			{
				data: [1, 5, 2, 9],
				borderColor: "red",
			},
		],
		labels: ["1", "2", "3", "4"],
		improve: 10,
		stats: 2,
	},
	{
		name: "Products SKU",
		total: 620,
		datasets: [
			{
				borderColor: "green",
				data: [1, 5, 2, 9],
			},
		],
		labels: ["1", "2", "3", "4"],
		improve: 23,
		stats: 1,
	},
	{
		name: "Purchase Order",
		total: 3200,
		datasets: [
			{
				borderColor: "green",
				data: [1, 5, 2, 9],
			},
		],
		labels: ["1", "2", "3", "4"],
		improve: 23,
		stats: 1,
	},
	{
		datasets: [
			{
				data: [1, 5, 2, 9],
				borderColor: "green",
			},
		],
		labels: ["1", "2", "3", "4"],
		name: "Sales Order",
		total: 2000,
		improve: 23,
		stats: 1,
	},
	{
		datasets: [
			{
				data: [1, 5, 2, 9],
				borderColor: "red",
			},
		],
		labels: ["1", "2", "3", "4"],
		name: ".......",
		total: 210,
		improve: 14,
		stats: 2,
	},
	{
		datasets: [
			{
				data: [1, 5, 2, 9],
				borderColor: "green",
			},
		],
		labels: ["1", "2", "3", "4"],
		name: ".......",
		total: 620,
		improve: 23,
		stats: 1,
	},
	{
		datasets: [
			{
				data: [1, 5, 2, 9],
				borderColor: "green",
			},
		],
		labels: ["1", "2", "3", "4"],
		name: ".......",
		total: 5200,
		improve: 23,
		stats: 1,
	},
];

const dataBar = {
	datasets: [
		{
			data: [1200, 800, 10000, 6000, 11000, 8000, 11000, 12000, 6500, 13000, 1000, 85000],
		},
	],
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

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
					<GraphCards data={dataLine} status={status} />
				</div>
			</div>
			<div className="flex justify-between gap3">{/* <BarChart labels={dataBar.labels} datasets={dataBar.datasets} /> */}</div>
		</>
	);
};

export default Home;
