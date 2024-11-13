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
import { Calendar } from "@/components/Calendar";

const EditMember = () => {
  const initialValue = {
    name: "",
    birthday: "",
    age: 0,
    phoneNumber: "",
    registeredDate: "",
    accessCard: true,
  };

  const { id } = useParams();
  const [fieldValue, setFieldvalue] = useState(initialValue);
  const [memberData, setMemberData] = useState(null);

  const fetchMemberData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/members/${id}`);
      setMemberData(res.data.memberData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMemberData();
  }, [id]);

  useEffect(() => {
    if (memberData) {
      setFieldvalue({
        name: memberData.name || "",
        birthday: memberData.birthday || "",
        age: memberData.age || 0,
        phoneNumber: memberData.phoneNumber || "",
        registeredDate: memberData.registeredDate || "",
        accessCard: memberData.accessCard || false,
      });
    }
  }, [memberData]);

  const handleFieldOnChange = (field, value) => {
    setFieldvalue((prevValue) => ({
      ...prevValue,
      [field]: value,
    }));
  };

  return (
    <Section>
      <Card>
        <CardHeader>
          <h1 className="text-2xl">Edit Member Details</h1>
          <CardDescription>User Id : {id}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              value={fieldValue.name || ""}
              onChange={(e) => handleFieldOnChange("name", e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            {/* <Calendar /> */}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

export default EditMember;
