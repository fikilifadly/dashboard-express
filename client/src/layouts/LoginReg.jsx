import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import bgauth from "../assets/bg-auth.png";

const Auth = () => {
	return (
		<>
			<main className="w-full h-screen flex">
				<div className="w-3/6 h-full py-20 px-32">
					<Outlet />
				</div>
				<div className="w-3/6 h-full">
					<img src={bgauth} alt="bg-auth" title="bg-auth" className="w-full h-full" />
				</div>
			</main>
			<ToastContainer />
		</>
	);
};

export default Auth;
