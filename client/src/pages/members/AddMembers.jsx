import React, { useEffect, useState } from "react";
import Section from "@/components/common/Section";
import { useParams } from "react-router-dom";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import useCreateMember from "@/hooks/useCreateMember";
import { Loader2 } from "lucide-react";

const AddMembers = () => {
	const payLoad = {
		MemberName: "",
		MemberBirthday: "",
		MemberAge: "",
		MemberPhoneNumber: "",
	};
	const { makeRequest, member, loading } = useCreateMember(
		import.meta.env.VITE_BASE_URL + "/members"
	);
	const [isLoading, setIsLoading] = useState(false);
	const { register, handleSubmit } = useForm({
		defaultValues: payLoad,
	});

	return (
		<Section>
			<Card className="max-w-[400px]">
				<CardHeader>
					<CardTitle>Add Member Details</CardTitle>
					<CardDescription>fill in details for members</CardDescription>
				</CardHeader>

				<CardContent>
					<form
						onSubmit={handleSubmit(async (data) => {
							await makeRequest({
								name: data.MemberName,
								birthday: data.MemberBirthday,
								age: data.MemberAge,
								phoneNumber: data.MemberPhoneNumber,
							});
							setIsLoading(false);
						})}
						className="flex flex-col gap-3">
						<Input
							type="text"
							placeholder="Member Name"
							{...register("MemberName", {
								required: "Member name required!",
							})}
						/>
						<Input
							type="date"
							placeholder="BOD"
							{...register("MemberBirthday", {
								required: "Birthday required!",
							})}
						/>
						<Input
							type="number"
							placeholder="Age"
							{...register("MemberAge", {
								required: "Age required!",
							})}
						/>
						<Input
							type="tel"
							placeholder="Phone Number"
							{...register("MemberPhoneNumber", {
								required: "Phone Number required!",
							})}
						/>
						<Button type="submit">
							{" "}
							{isLoading ? (
								<Loader2 className="animate-spin" />
							) : (
								"Add"
							)}{" "}
						</Button>
						<Button
							type="reset"
							variant="outline">
							Clear
						</Button>
					</form>
				</CardContent>
			</Card>
		</Section>
	);
};

export default AddMembers;
