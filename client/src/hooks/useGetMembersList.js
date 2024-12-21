import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetMemberList = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);

	const fetchData = useCallback(async () => {
		setLoading(true);
		try {
			const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/members`);
			// console.log(res.data);
			setData(res.data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	});

	useEffect(() => {
		fetchData();
	}, []);

	return [data, loading, fetchData];
};

export default useGetMemberList;
