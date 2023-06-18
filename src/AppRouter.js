import { Routes, Route } from "react-router-dom";
import LazyLoading from "./components/lazyLoading/LazyLoading";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="lazy" element={<LazyLoading />} />
		</Routes>
	);
};

export default AppRouter;
