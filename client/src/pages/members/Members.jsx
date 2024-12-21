import React, { useEffect, useState } from "react";
import Section from "@/components/common/Section";
import ModulerTable from "@/components/common/ModulerTable";
import { TableCell, TableRow } from "@/components/ui/table";
import { Loader2, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import axios from "axios";
import useGetMemberList from "@/hooks/useGetMembersList";
import { Button } from "@/components/ui/button";

const Members = () => {
	const TABLE_HEADS = [
		"Name",
		"BOD",
		"Age",
		"Phone Number",
		"Registred Date",
		"Card",
		"Acton",
	];

	const [members, loading, fetchMembersData] = useGetMemberList();
	const [isLoading, setIsLoading] = useState(false);

	const handleDeleteMembers = async (id) => {
		setIsLoading(true);
		try {
			const res = await axios.delete(
				`${import.meta.env.VITE_BASE_URL}/members/${id}`
			);
			console.log(`${id} deleted`);

			setIsLoading(false);
		} catch (error) {
			console.error(error);
		} finally {
			fetchMembersData();
		}
	};

	return (
		<Section>
			<Link
				to={"/members/add"}
				className="p-3 bg-red-500 w-32 rounded-md">
				Add Members
			</Link>

			<ModulerTable
				tableHeads={TABLE_HEADS}
				tableTitle={"Members"}>
				{members.memberData?.map((member, i) => (
					<TableRow key={i}>
						<TableCell className="font-medium">{member.name}</TableCell>
						<TableCell>
							{new Date(member.birthday).toISOString().split("T")[0]}
						</TableCell>
						<TableCell>{member.age}</TableCell>
						<TableCell>{member.phoneNumber}</TableCell>
						<TableCell>
							{new Date(member.registeredDate).toISOString().split("T")[0]}
						</TableCell>
						<TableCell>
							{member.accessCard ? (
								<Badge
									variant={"outline"}
									className={"bg-green-600"}>
									Yes
								</Badge>
							) : (
								<Badge variant={"outline"}> No </Badge>
							)}
						</TableCell>
						<TableCell className="flex items-center gap-2">
							<Link to={`/members/edit/${member._id}`}>
								<Pencil size={20} />
							</Link>
							<Button
								variant={"outline"}
								onClick={() => handleDeleteMembers(member._id)}>
								{isLoading ? (
									<Loader2 className="animate-spin" />
								) : (
									<Trash2 />
								)}
							</Button>
						</TableCell>
					</TableRow>
				))}
			</ModulerTable>
		</Section>
	);
};

export default Members;
