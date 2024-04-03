"use client";
import React, { useState, useEffect } from "react";

import { SubjectType, columns } from "./columns";
import { DataTable } from "./data-table";

const ViewSubjectTable = () => {
  const [data, setData] = useState<SubjectType[]>([]);

  return (
    <div className="w-[40vw]">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ViewSubjectTable;
