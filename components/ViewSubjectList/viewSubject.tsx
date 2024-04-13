"use client";
import React, { useState, useEffect } from "react";

import { SubjectType, columns } from "./columns";
import { DataTable } from "./data-table";

const ViewSubjectTable = ({ subjects }: { subjects: SubjectType[] }) => {
  return (
    <div className="w-[40vw]">
      <DataTable columns={columns} data={subjects} />
    </div>
  );
};

export default ViewSubjectTable;
