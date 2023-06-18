import React, { useEffect, useState } from "react";

export const useFetch = (uri) => {
	const [data, dataSet] = useState();
	const [loading, loadingSet] = useState();
	const [error, errorSet] = useState();

	useEffect(() => {
		if (!uri) return;

		fetch(uri)
			.then((data) => data.json())
			.then(dataSet)
			.then(() => loadingSet(false))
			.catch((error) => errorSet(error));
	}, [uri]);

	return { loading, data, error };
};
