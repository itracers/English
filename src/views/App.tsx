import { Routes } from "react-router";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Table } from "./table";
import { Words } from "./words";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/table" element={<Table />} />
				<Route path="/" element={<Words />} />
			</Routes>
		</Router>
	);
};
