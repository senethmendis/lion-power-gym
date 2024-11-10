import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DashboardCard = ({ title, numberValue, description }) => {
  return (
    <Card className="">
      <CardContent className="mt-5 flex flex-col gap-1">
        <h2 className="text-xl ">{title}</h2>
        <h1 className="text-4xl font-bold">{numberValue}</h1>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
