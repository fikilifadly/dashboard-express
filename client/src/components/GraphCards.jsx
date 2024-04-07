import { convertNumber } from "../utils";

const GraphCards = ({ data, status }) => {
	return (
		<div className="grid grid-cols-4 gap-8">
			{data.map((el, i) => (
				<div key={i} className="flex flex-col justify-between p-3 border-2 border-gray-200 rounded-md">
					<div className="flex justify-between">
						<span className="text-sm font-semibold">{el.name}</span>
						<button>&#8942;</button>
					</div>

					<div className="flex justify-between">
						<div className="flex flex-col gap-1.5">
							<span className="text-3xl font-bold">{convertNumber(el.total)}</span>
							<p>
								<span className={`${el.stats == 1 ? "text-green-400" : "text-red-400"} font-bold`}>
									{el.stats == 1 ? "+" : "-"}
									{el.improve}%
								</span>{" "}
								{status}
							</p>
						</div>
						<span className="text-xl font-bold">Graphic</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default GraphCards;
