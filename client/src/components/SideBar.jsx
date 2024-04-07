import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import dashboard from "../assets/icons/dashboard.png";
import vendor from "../assets/icons/vendor.png";
import order from "../assets/icons/order.png";

const SideBar = () => {
	const isActive = ({ isActive }) => (isActive ? "flex gap-3 py-2 px-3 items-center custom-bg rounded-lg text-white" : "flex gap-3 py-2 px-3 items-center");

	return (
		<>
			<div className="px-5 py-7 flex flex-col gap-7 justify-between ">
				<Logo color="white" size="large" />

				<span className="text-white mt-5 block">Menu</span>
				<nav>
					<ul className={`text-white flex flex-col gap-3 text-md`}>
						<li>
							<NavLink to="/" className={isActive}>
								<img src={dashboard} alt="icon dashboard" className=" object-scale-down w-[20px] h-[20px]  filter invert" />
								<span className="text-md">Dashboard</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/vendor" className={isActive}>
								<img src={vendor} alt="icon dashboard" className=" object-scale-down w-[20px] h-[20px]  filter invert" />
								<span className="text-md">Vendor/Supplier</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/order" className={isActive}>
								<img src={order} alt="icon dashboard" className=" object-scale-down w-[20px] h-[20px]  filter invert" />
								<span className="text-md">Customer/Dealer</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default SideBar;
