import { useState } from "react";
import Table from "./components/Table";
import { Typography } from "@material-tailwind/react";
import Action from "./components/Action";

const TABLE_HEAD = [
  { label: "Name", key: "name" },
  { label: "Action", key: "action" },
];

const TABLE_ROWS = [
  {
    id: 1,
    name: "John Michael",
  },
  {
    id: 2,
    name: "Alexa Liras",
  },
];

export default function Domains({ setSelectedDomain }) {
  function onItemClick(domain) {
    const domainId = domain.id;
    setSelectedDomain(domainId);
  }
  return (
    <>
      <Typography variant="h1">Domains</Typography>
      <Table
        heading={TABLE_HEAD}
        data={TABLE_ROWS.map((item) => {
          return {
            ...item,
            action: <Action name="Select" onClick={onItemClick} />,
          };
        })}
      />
    </>
  );
}
