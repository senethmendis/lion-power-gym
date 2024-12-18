import React, { useState } from "react";
import Section from "@/components/common/Section";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Button } from "@/components/ui/button";
import useGetMemberById from "@/hooks/useGetMemberById";

import { useForm } from "react-hook-form";

const EditMember = () => {
	const { register, handleSubmit } = useForm();
	const { id } = useParams();

	const [editable, setEditable] = useState(true);
	const [memberData, IsLoading] = useGetMemberById({ id });
	const [updateLoading, setUpdateLoading] = useState(false);

	const makeEditable = () => {
		setEditable(!editable);
	};

	return (
		<Section>
			<Card>
				<CardHeader>
					<section className="flex w-full justify-between">
						<div>
							<h1 className="text-2xl">Edit Member Details</h1>
							<CardDescription>User Id : {id}</CardDescription>
						</div>
						<div>
							<Button onClick={makeEditable}>Edit</Button>
						</div>
					</section>
				</CardHeader>
				{IsLoading ? (
					<p>Loading .... </p>
				) : (
					<CardContent>
						<form
							onSubmit={() => updateEdits(id)}
							className="grid gap-3">
							<div className="grid w-full max-w-sm items-center gap-2">
								<Label htmlFor="name">Name</Label>
								<Input
									type="text"
									id="name"
									placeholder="Name"
									value={memberData.name || ""}
									onChange={(e) => console.log(e.target.value)}
									disabled={editable}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-2">
								<Label htmlFor="age">Age</Label>
								<Input
									type="text"
									id="age"
									placeholder="age"
									value={memberData.age || ""}
									onChange={(e) => console.log(e.target.value)}
									disabled={editable}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-2">
								<Label htmlFor="phone">Phone Number</Label>
								<Input
									type="tel"
									id="phone"
									placeholder="phone"
									value={memberData.phoneNumber || ""}
									onChange={(e) => console.log(e.target.value)}
									disabled={editable}
								/>
							</div>
							<div className="flex items-center space-x-2 my-3">
								<Switch
									id="access-card"
									checked={memberData.accessCard}
									onChange={(e) => console.log(e.target.value)}
									// disabled={editable}
								/>
								<Label htmlFor="access-card">Access Card</Label>
							</div>

							{/* calender component */}
							<div className="grid w-full max-w-sm items-center gap-2">
								<Label htmlFor="birthday">Birthday</Label>
								<input
									type="date"
									id="birthday"
									name="birthday"
									className="p-2 rounded-sm"
									onChange={(e) => console.log(e.target.value)}
									value={
										memberData.birthday &&
										!isNaN(new Date(memberData.birthday).getTime())
											? new Date(memberData.birthday)
													.toISOString()
													.split("T")[0]
											: ""
									}
									disabled={editable}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-2">
								<Label htmlFor="birthday">Registerded Date</Label>
								<input
									type="date"
									id="registeredDate"
									name="registeredDate"
									className="p-2 rounded-sm"
									onChange={(e) => console.log(e.target.value)}
									value={
										memberData.registeredDate &&
										!isNaN(
											new Date(memberData.registeredDate).getTime()
										)
											? new Date(memberData.registeredDate)
													.toISOString()
													.split("T")[0]
											: ""
									}
									disabled={true}
								/>
							</div>
							{!editable && (
								<div className="grid w-full grid-cols-2 max-w-sm items-center gap-4 mt-10">
									<Button type={"submit"}>Save</Button>
									<Button
										type={"reset"}
										variant="outline">
										Clear
									</Button>
								</div>
							)}
						</form>
					</CardContent>
				)}
			</Card>
		</Section>
	);
};

export default EditMember;
