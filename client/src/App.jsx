import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import Auth from "./layouts/LoginReg";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";
import Vendor from "./pages/Vendor";
import Order from "./pages/Order";

const router = createBrowserRouter([
	{
		element: <Dashboard />,
		loader: async () => {
			if (!localStorage.access_token) {
				return redirect("/login");
			}
			return null;
		},
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/vendor",
				element: <Vendor />,
			},
			{
				path: "/order",
				element: <Order />,
			},
		],
	},
	{
		element: <Auth />,
		loader: async () => {
			if (localStorage.access_token) {
				return redirect("/");
			}
			return null;
		},
		children: [
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
