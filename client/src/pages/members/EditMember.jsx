import React, { useEffect, useState } from "react";
import Section from "@/components/common/Section";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useFetch } from "@/hooks/useFetch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const EditMember = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    `${import.meta.env.VITE_BASE_URL}members/${id}`
  );

  useEffect(() => {});

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
              disabled
              value={data?.name || ""}
            />
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

export default EditMember;