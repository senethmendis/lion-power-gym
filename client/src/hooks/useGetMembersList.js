import axios from "axios";
import { useEffect, useState } from "react";

const useGetMemberList = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/members`);
				// console.log(res.data);
				setData(res.data);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return [data, loading];
};

export default useGetMemberList;
