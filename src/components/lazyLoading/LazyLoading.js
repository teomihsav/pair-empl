// import React, { lazy, Suspense } from "react";
// import TestComp from "./testComp/TestComp.js";

// const LazyLoading = () => {
// 	// const TestComp = lazy(() => import("./testComp/TestComp.js"));
// 	return (
// 		<div>
// 			<TestComp />
// 		</div>
// 	);
// };

// export default LazyLoading;

import React, { lazy, Suspense } from "react";

const LazyLoading = () => {
	const TestComp = lazy(() => import("./testComp/TestComp.js"));
	return (
		<div>
			LazyLoading
			<Suspense fallback={<p>Loading...</p>}>
				<TestComp />
			</Suspense>
		</div>
	);
};

export default LazyLoading;
