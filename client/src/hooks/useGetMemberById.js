import axios from "axios";
import { useEffect, useState } from "react";

const useGetMemberById = ({ id }) => {
  const [member, setMember] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/members/${id}`
        );
        // console.log(res.data);

        setLoading(false);
        setMember(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return [member, loading];
};
export default useGetMemberById;
