import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../components/SideBar";
import UserBar from "../components/UserBar";

const Dashboard = () => {
	return (
		<>
			<div className="flex">
				<div className="w-1/6 h-screen sticky top-0 bg-[#262626]">
					<SideBar />
				</div>
				<div className="w-5/6 min-h-screen max-h-screen overflow-x-auto py-7 px-5">
					<UserBar />
					<Outlet />
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Dashboard;
