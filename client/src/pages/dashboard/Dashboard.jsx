import React from "react";
import DashboardCard from "@/components/pages/dashboard/DashboardCard";
import { cardDetails } from "@/constants";
import Section from "@/components/common/Section";

const Dashboard = () => {
  return (
    <Section>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {cardDetails.map((card, i) => (
          <DashboardCard
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
