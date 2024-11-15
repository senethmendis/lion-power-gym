import React, { useEffect, useState } from "react";
import Section from "@/components/common/Section";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";

const EditMember = () => {
  const { id } = useParams();
  const [member, setMember] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchMemberData = async () => {
    setLoading(true);
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URl}/members/${id}`
    );
    setLoading(false);
    setMember(res.data.memberData);
    console.log(res.data);
  };

  useEffect(() => {
    fetchMemberData();
  }, [id]);

  console.log(member);

  return (
    <Section>
      <Card>
        <CardHeader>
          <h1 className="text-2xl">Edit Member Details</h1>
          <CardDescription>User Id : {id}</CardDescription>
        </CardHeader>
        {loading ? (
          <p>Loading .... </p>
        ) : (
          <CardContent>
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Name"
                value={""}
                onChange={(e) => console.log("tes")}
              />
            </div>
          </CardContent>
        )}
      </Card>
    </Section>
  );
};

export default EditMember;
