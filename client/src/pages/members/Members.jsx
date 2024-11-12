import React, { useState } from "react";
import Section from "@/components/common/Section";
import ModulerTable from "@/components/common/ModulerTable";
import { invoices } from "@/constants";
import { useFetch } from "@/hooks/useFetch";

const Members = () => {
  const tableHeads = ["Invoice", "Status", "Method", "Amount", "Action"];

  const [url, setUrl] = useState(import.meta.env.VITE_BASE_URL + "members");
  const { data, error, loading } = useFetch(url);

  return (
    <Section>
      <ModulerTable
        tableHeads={tableHeads}
        tableTitle={"Members"}
      ></ModulerTable>
    </Section>
  );
};

export default Members;
