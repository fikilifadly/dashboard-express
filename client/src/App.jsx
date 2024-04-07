import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./layouts/LoginReg";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		element: <Dashboard />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		element: <Auth />,
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
