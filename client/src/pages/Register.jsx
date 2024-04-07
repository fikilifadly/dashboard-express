import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
const Register = () => {
	const [value, setValue] = useState();
	return (
		<div className="flex flex-col gap-7">
			<div className="flex flex-col gap-3 justify-center items-center">
				<h1 className="font-bold text-2xl custom-bg-text">Registration</h1>
				<div className="flex justify-center items-center">
					<div className="flex flex-col items-center gap-2">
						<button className="rounded-full w-[25px] h-[25px] text-white text-sm flex items-center justify-center custom-bg">1</button>
						<span className="text-sm font-bold">User Info</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<button className="rounded-full w-[25px] h-[25px] text-sm flex items-center justify-center text-black">2</button>
						<span className="text-sm font-bold">Company Info</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<button className="rounded-full w-[25px] h-[25px]  text-sm flex items-center justify-center ">3</button>
						<span className="text-sm font-bold">Package</span>
					</div>
				</div>
			</div>
			<form className="flex flex-col gap-7">
				<div className="flex flex-col gap-3">
					<label htmlFor="email" className="text-sm font-bold">
						Email Account
					</label>
					<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
						<input type="email" placeholder="Email Account" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<label htmlFor="password" className="text-sm font-bold">
						Confirmation Password
					</label>
					<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
						<input type="password" placeholder="Password" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<label htmlFor="password" className="text-sm font-bold">
						Confirmation Password
					</label>
					<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
						<input type="password" placeholder="Password" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
					</div>
				</div>
				<PhoneInput defaultCountry="ID" useNationalFormatForDefaultCountryValue={true} withCountryCallingCode={true} international={true} value={value} onChange={setValue} />

				<button className="w-full px-4 py-3 bg-gradient-to-r from-[#31ae1d] from-0% to-[#1e8d91] to-70% text-white font-bold text-md rounded-md hover:bg-[#1e8d91]">Login</button>
			</form>

			<Link to="/login" className="text-[#31ae1d] font-bold text-center">
				Back
			</Link>
		</div>
	);
};

export default Register;
