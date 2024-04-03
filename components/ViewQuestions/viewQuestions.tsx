"use client";
import React, { useState, useEffect } from "react";

import { QuestionType, columns } from "./columns";
import { DataTable } from "./data-table";

const ViewQuestions = () => {
  const [data, setData] = useState<QuestionType[]>([]);

  return (
    <div className="w-[60vw]">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ViewQuestions;
