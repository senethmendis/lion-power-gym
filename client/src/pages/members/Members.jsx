import React, { useState } from "react";
import Section from "@/components/common/Section";
import ModulerTable from "@/components/common/ModulerTable";
import { useFetch } from "@/hooks/useFetch";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Members = () => {
  const tableHeads = [
    "Name",
    "BOD",
    "Age",
    "Phone Number",
    "Registred Date",
    "Card",
    "Acton",
  ];

  // const [url, setUrl] = useState();
  const { data, error, loading } = useFetch(
    `${import.meta.env.VITE_BASE_URL}members`
  );

  return (
    <Section>
      {loading && <p>Loading...</p>}
      {error && <p>Failed to load data.</p>}
      {data && data.data == null && <p>No data available.</p>}

      <ModulerTable tableHeads={tableHeads} tableTitle={"Members"}>
        {data?.data?.map((member, i) => (
          <TableRow key={member._id}>
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
                <Badge variant={"outline"} className={"bg-green-600"}>
                  Yes
                </Badge>
              ) : (
                <Badge variant={"outline"}> No </Badge>
              )}
            </TableCell>
            <TableCell>
              <Link to={`/members/${member._id}`}>
                <Button>
                  <Pencil />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </ModulerTable>
    </Section>
  );
};

export default Members;
