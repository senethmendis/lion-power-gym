import React, { useEffect, useState } from "react";
import DashboardCard from "@/components/pages/dashboard/DashboardCard";
import { cardDetails } from "@/constants";
import Section from "@/components/common/Section";
import axios from "axios";
import { Turtle } from "lucide-react";
import useGetCardStatus from "@/hooks/useGetCardStatus";

const Dashboard = () => {
	const [data, loading] = useGetCardStatus();

	return (
		<Section>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
				{data.map((card, i) => (
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
