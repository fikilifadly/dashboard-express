const Filters = ({ data, onClick, active }) => {
	const classIsActive = (e) =>
		e == active
			? "active w-fit py-2 px-5 rounded-md text-sm border text-white shadow-md bg-green-500"
			: "w-fit py-2 px-5 rounded-md text-sm border text-black border border-gray-300";

	return (
		<div className="flex gap-5">
			{data.map((period) => (
				<button data-name={period} className={classIsActive(period)} key={period} onClick={onClick}>
					{period}
				</button>
			))}
		</div>
	);
};

export default Filters;
