import axios from "axios";
import { useEffect, useState } from "react";

const useGetCardStatus = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);

				const res = await axios.get(
					`${import.meta.env.VITE_BASE_URL}/cardStatus`
				);
				setData(res.data.cardStats);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return [data, loading];
};

export default useGetCardStatus;
