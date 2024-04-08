import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { minStepRegister, register, resetStepRegister, setRegister } from "../stores/userslice";
const Register = () => {
	const { stepRegister, registerData } = useSelector((state) => state.user);

	const [value, setValue] = useState();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();

		if (stepRegister == 1) {
			const [email, password, confirmation] = e.target;

			if (password.value !== confirmation.value) return toast.error("Password not match");

			dispatch(
				setRegister({
					email: email.value,
					password: password.value,
					phone: value,
				})
			);
		}

		if (stepRegister == 2) {
			const [username, nik, organization, address] = e.target;
			dispatch(
				setRegister({
					username: username.value,
					nik: nik.value,
					organization: organization.value,
					address: address.value,
				})
			);
		}

		if (stepRegister == 3) {
			dispatch(
				setRegister({
					bank_name: e.target[0].value,
					bank_account: e.target[1].value,
				})
			);

			dispatch(register(registerData)).then((el) => {
				console.log(el, "====registration");
				if (!el.error) {
					dispatch(resetStepRegister());
					navigate("/login");
				}
			});
		}
	};

	const active = (num) => {
		console.log(num, stepRegister);

		return num == stepRegister
			? "rounded-full w-[25px] h-[25px] text-white text-sm flex items-center justify-center cursor-none custom-bg"
			: "rounded-full w-[25px] h-[25px] text-sm flex items-center justify-center cursor-none bg-gray-300 font-semibold";
	};

	return (
		<div className="flex flex-col gap-7">
			<div className="flex flex-col gap-3 justify-center items-center">
				<h1 className="font-bold text-2xl ">Registration</h1>
				<div className="flex justify-center gap-3 items-center">
					<div className="flex flex-col items-center gap-2">
						<button className={active(1)}>1</button>
						<span className="text-sm font-bold">User Info</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<button className={active(2)}>2</button>
						<span className="text-sm font-bold">Company Info</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<button className={active(3)}>3</button>
						<span className="text-sm font-bold">Package</span>
					</div>
				</div>
			</div>
			<form className="flex flex-col gap-7" onSubmit={submitHandler}>
				<h2 className="font-bold text-2xl custom-bg-text">{stepRegister == 1 ? "User Info" : stepRegister == 2 ? "Company Info" : "Package"}</h2>
				{stepRegister == 1 && (
					<>
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
					</>
				)}
				{stepRegister == 2 && (
					<>
						<div className="flex flex-col gap-3">
							<label htmlFor="username" className="text-sm font-bold">
								Username
							</label>
							<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
								<input type="text" placeholder="username" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<label htmlFor="nik" className="text-sm font-bold">
								NIK
							</label>
							<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
								<input type="text" placeholder="NIK" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<label htmlFor="organization" className="text-sm font-bold">
								Organization
							</label>
							<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
								<input type="text" placeholder="Organization" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<label htmlFor="adress" className="text-sm font-bold">
								Address
							</label>
							<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
								<input type="text" placeholder="adress" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
							</div>
						</div>
					</>
				)}
				{stepRegister == 3 && (
					<>
						<div className="flex flex-col gap-3">
							<label htmlFor="bankname" className="text-sm font-bold">
								Bank Name
							</label>
							<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
								<input type="text" placeholder="Bank Name" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<label htmlFor="bank_account" className="text-sm font-bold">
								bank_account
							</label>
							<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
								<input type="text" placeholder="bank_account" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
							</div>
						</div>
					</>
				)}
				<button className="w-full px-4 py-3 bg-gradient-to-r from-[#31ae1d] from-0% to-[#1e8d91] to-70% text-white font-bold text-md rounded-md hover:bg-[#1e8d91]">
					{stepRegister == 3 ? "Register" : "Next"}
				</button>
			</form>
			<button className="text-[#31ae1d] font-bold text-center" onClick={() => dispatch(minStepRegister())}>
				Back
			</button>
		</div>
	);
};

export default Register;
