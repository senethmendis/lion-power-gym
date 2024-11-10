import React from "react";
import Section from "@/components/common/Section";
import ModulerTable from "@/components/common/ModulerTable";
import { invoices } from "@/constants";

const Members = () => {
  const tableHeads = ["Invoice", "Status", "Method", "Amount"];

  return (
    <Section>
      <ModulerTable
        data={invoices}
        tableHeads={tableHeads}
        tableTitle={"Members"}
      />
    </Section>
  );
};

export default Members;
