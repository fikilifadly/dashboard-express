const Logo = ({ color, size }) => {
	return (
		<div className="flex gap-3 items-center">
			<button
				className={`rounded-full ${size == "large" ? "w-[40px] h-[40px] text-2xl" : "w-[30px] h-[30px] text-xl"} text-white font-bold  flex items-center justify-center custom-bg`}
			>
				B
			</button>
			<span className={`font-bold text-lg text-${color ? color : "white"}`}>B2b Portal</span>
		</div>
	);
};

export default Logo;
