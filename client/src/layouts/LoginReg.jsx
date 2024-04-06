import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import bgauth from "../assets/bg-auth.png";

const Auth = () => {
	return (
		<>
			<div className="w-full h-screen flex">
				<div className="w-3/6 h-full p-10">
					<Outlet />
				</div>
				<div className="w-3/6 h-full">
					<img src={bgauth} alt="bg-auth" loading="lazy" title="bg-auth" className="w-full h-full" />
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Auth;
