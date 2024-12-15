import axios from "axios";
import { useCallback, useState } from "react";

const useCreateMember = (url) => {
	const [member, setMember] = useState({});
	const [loading, setLoading] = useState(false);

	const makeRequest = useCallback(
		async (requestData) => {
			setLoading(true);
			try {
				const res = await axios.post(url, requestData);
				setMember(res.data);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		},
		[url]
	);

	return { makeRequest, member, loading };
};

export default useCreateMember;
