import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Members from "./pages/members/Members";
import EditMember from "./pages/members/EditMember";
import AddMembers from "./pages/members/AddMembers";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Layout />}>
					<Route
						index
						element={<Login />}
					/>
					<Route
						path="/dashboard"
						element={<Dashboard />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
					<Route
						path="/members"
						element={<Members />}
					/>
					<Route
						path="/members/edit/:id"
						element={<EditMember />}
					/>
					<Route
						path="/members/add"
						element={<AddMembers />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
