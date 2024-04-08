import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import person from "../assets/icons/person.png";
import lock from "../assets/icons/lock.png";

import Logo from "../components/Logo";
import { login } from "../stores/userslice";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		const [email, password] = e.target;

		dispatch(login({ email: email.value, password: password.value })).then((el) => {
			if (!el.error) navigate("/");
		});
	};

	return (
		<div className="flex flex-col gap-7">
			<Logo color="black" />
			<h1 className="font-bold text-2xl">Login to your account</h1>
			<form className="flex flex-col gap-7" onSubmit={submitHandler}>
				<div className="flex flex-col gap-3">
					<label htmlFor="email" className="text-sm font-bold">
						Email Account
					</label>
					<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
						<img src={person} alt="lock" className=" object-scale-down w-[20px] h-[20px] opacity-50" />
						<input type="email" placeholder="Email Account" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<label htmlFor="password" className="text-sm font-bold">
						Password
					</label>
					<div className="flex w-full px-4 py-3 items-center object-scale-down rounded-md border border-gray-200 bg-gray-100">
						<img src={lock} alt="lock" className=" object-scale-down w-[20px] h-[20px] opacity-50" />
						<input type="password" placeholder="Password" className="pl-3 text-sm w-full bg-transparent text-md focus:outline-none" />
					</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center">
						<input type="radio" name="remember" id="remember" className="w-4 h-4" />
						<label htmlFor="remember" className="text-sm font-bold">
							Remember me
						</label>
					</div>
					<Link to="/login" className="text-sm font-bold text-[#31ae1d]">
						Forgot Password?
					</Link>
				</div>
				<button className="w-full px-4 py-3 custom-bg text-white font-bold text-md rounded-md hover:bg-[#1e8d91]">Login</button>
			</form>

			<p>
				Don&apos;t have an account?{" "}
				<Link to="/register" className="text-[#31ae1d] font-bold">
					Get Started
				</Link>
			</p>
		</div>
	);
};

export default Login;
