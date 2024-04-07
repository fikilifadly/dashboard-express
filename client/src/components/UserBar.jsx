import search from "../assets/icons/search.png";
import notification from "../assets/icons/notification.png";
import expand from "../assets/icons/expand.png";
import collapse from "../assets/icons/collapse.png";

const UserBar = () => {
	return (
		<div className="flex justify-between">
			<div className="bg-gray-100">
				<div className="flex w-[350px] px-4 py-2 items-center object-scale-down rounded-lg border border-gray-200 bg-gray-100">
					<img src={search} alt="lock" className=" object-scale-down w-[20px] h-[20px] opacity-50" />
					<input type="email" placeholder="Search for stock and more" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
				</div>
			</div>

			<div className="flex gap-3">
				<div className="flex gap-5">
					<div className="flex flex-col text-right">
						<span className="font-bold text-sm">Chintia Pradipta</span>
						<span className="text-gray-500 text-sm">Cyintia Pradipta xxxx</span>
					</div>
					<div className="rounded-full w-10 h-10 overflow-hidden">
						<img
							src="https://images.unsplash.com/photo-1712372271755-d52f636fed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
							alt="title"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<button>
					<img src={notification} alt="notfication" />
				</button>
				<button>
					<img src={expand} alt="expand" />
				</button>
				<button>
					<img src={collapse} alt="collapse" />
				</button>
			</div>
		</div>
	);
};

export default UserBar;
