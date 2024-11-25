import React, { useEffect, useState } from "react";
import DashboardCard from "@/components/pages/dashboard/DashboardCard";
import { cardDetails } from "@/constants";
import Section from "@/components/common/Section";
import axios from "axios";
import { Turtle } from "lucide-react";

const Dashboard = () => {
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);
  const [memberCount, setMemberCount] = useState();

  const getStatusData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/cardStatus`
      );
      setStatus(res.data.cardStats);
      setLoading(false);
      // console.log(res.data.cardStats);
    } catch (error) {
      console.error(error);
    }
  };

  const getMemberCount = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/members`);
      setMemberCount(res.data.memberData?.length);
      console.log(res.data.memberData.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMemberCount();
    getStatusData();
  }, []);

  return (
    <Section>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {status?.map((card, i) => (
          <DashboardCard
            loading={loading}
            key={i}
            title={card.title}
            numberValue={card.number}
            description={card.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Dashboard;
