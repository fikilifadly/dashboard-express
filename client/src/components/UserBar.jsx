import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import search from "../assets/icons/search.png";
import person from "../assets/icons/person.png";
import notification from "../assets/icons/notification.png";
import expand from "../assets/icons/expand.png";
import collapse from "../assets/icons/collapse.png";
import { editProfile, getProfile, setNullCurrentUser } from "../stores/userslice";
import Modal from "./Modal";
import { removeModalHandler, showModalHandler } from "../utils";

const UserBar = () => {
	const { currentUser } = useSelector((state) => state.user);
	const [show, setShow] = useState(true);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logout = () => {
		localStorage.removeItem("access_token");
		localStorage.removeItem("user");
		dispatch(setNullCurrentUser());
		navigate("/login");
	};
	const toggleShow = () => {
		setShow(!show);
	};

	const openModal = () => {
		showModalHandler();
	};

	const submitEdit = async (e) => {
		e.preventDefault();
		const [username, address] = e.target;

		const data = {
			username: username.value,
			address: address.value,
		};
		dispatch(editProfile(data)).then((el) => {
			if (!el.error) {
				dispatch(getProfile());
				removeModalHandler();
			}
		});
	};

	useEffect(() => {
		dispatch(getProfile());
	}, []);

	return (
		<>
			<div className="flex justify-between mb-8">
				<div className="bg-gray-100">
					<div className="flex w-[350px] px-4 py-2 items-center object-scale-down rounded-lg border border-gray-200 bg-gray-100">
						<img src={search} alt="lock" className=" object-scale-down w-[20px] h-[20px] opacity-50" />
						<input type="email" placeholder="Search for stock and more" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
					</div>
				</div>

				<div className="flex gap-10">
					<div className={`group flex gap-5 transition-all duration-1000 ease-in-out ${show ? "w-100 h-auto" : "w-0 h-0"} relative`}>
						<div className={`flex flex-col text-right`}>
							<span className={`font-bold text-sm ${show ? "block" : "hidden"}`}>{currentUser?.username}</span>
							<span className={`text-gray-500 text-sm ${show ? "block" : "hidden"}`}>{currentUser?.full_name}</span>
						</div>
						<div className="rounded-full w-10 h-10 overflow-hidden">
							<img src={currentUser?.image_url ? currentUser?.image_url : person} alt="title" className="w-full h-full object-cover" />
						</div>

						<div className="hidden w-full group gap-2 group-hover:absolute group-hover:block bottom-[-225%] right-0 p-3 shadow-lg bg-gray-100 rounded-lg text-center">
							<button className=" group text-white  p-2 w-[70%] bg-green-600 rounded-lg text-center mb-3" onClick={openModal}>
								Edit Profile
							</button>
							<button className="group text-white  p-2 w-[70%] bg-green-600 rounded-lg text-center" onClick={logout}>
								Log Out
							</button>
						</div>
					</div>
					<div className="flex gap-5 mr-3">
						<button>
							<img src={notification} alt="notfication" />
						</button>
						<button onClick={toggleShow}>
							<img src={show ? collapse : expand} alt="showicon" />
						</button>
					</div>
				</div>
			</div>
			<Modal>
				<form className="flex flex-col p-5 w-full" onSubmit={submitEdit}>
					<div className="flex flex-col gap-3">
						<label htmlFor="bankname" className="text-sm font-bold">
							Username
						</label>
						<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
							<input type="text" placeholder="Bank Name" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" defaultValue={currentUser?.username} />
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="address" className="text-sm font-bold">
							Address
						</label>
						<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
							<input type="text" placeholder="address" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" defaultValue={currentUser?.address} />
						</div>
					</div>
					<button className="w-full px-4 py-3 bg-gradient-to-r from-[#31ae1d] from-0% to-[#1e8d91] to-70% text-white font-bold text-md rounded-md hover:bg-[#1e8d91]">Save</button>
				</form>
			</Modal>
		</>
	);
};

export default UserBar;
