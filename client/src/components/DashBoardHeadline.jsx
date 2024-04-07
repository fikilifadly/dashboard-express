const DashBoardHeadline = ({ title, description }) => {
	return (
		<div className="w-full flex justify-between items-center">
			<div className="flex flex-col gap-1">
				<h1 className="text-gray-600 text-xl font-bold opacity-80">{title}</h1>
				<p className="text-gray-400">{description}</p>
			</div>
			<button className="border-green-400 border-2 h-fit text-green-400 font-bold px-5 py-1 rounded-md">Import Data</button>
		</div>
	);
};

export default DashBoardHeadline;
