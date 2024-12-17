import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardCard = ({ title, numberValue, description, loading = false }) => {
	return (
		<Card className="">
			<CardContent className="mt-5 flex flex-col gap-1">
				{loading ? (
					<div className="grid gap-3">
						<Skeleton className="w-full h-[20px] rounded-full" />
						<Skeleton className="w-[150px] h-[20px] rounded-full" />
						<Skeleton className="w-[200px] h-[20px] rounded-full" />
					</div>
				) : (
					<>
						<h2 className="text-xl ">{title}</h2>
						<h1 className="text-4xl font-bold">{numberValue}</h1>
						<p className="text-neutral-600">{description}</p>
					</>
				)}
			</CardContent>
		</Card>
	);
};

export default DashboardCard;
