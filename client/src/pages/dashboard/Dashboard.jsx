import React from "react";
import DashboardCard from "@/components/DashboardCard";
import { cardDetails } from "@/constants";

const Dashboard = () => {
  return (
    <section className="py-2 sm:py-4 md:py-10">
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
    </section>
  );
};

export default Dashboard;
