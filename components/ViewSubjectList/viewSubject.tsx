"use client";
import React, { useState, useEffect } from "react";

import { SubjectType, columns } from "./columns";
import { DataTable } from "./data-table";

import Subjects from "../../app/(viewquestions)/_components/sample.subjectDB.json";

const ViewSubjectTable = () => {

  return (
    <div className="w-[40vw]">
      <DataTable columns={columns} data={Subjects} />
    </div>
  );
};

export default ViewSubjectTable;
