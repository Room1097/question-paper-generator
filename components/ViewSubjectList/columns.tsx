import { ColumnDef } from "@tanstack/react-table";

export type SubjectType = {
  id: string;
  name: string;
 
};

export const columns: ColumnDef<SubjectType>[] = [

  {
    accessorKey: "name",
    header: "Subject Name",
  },
  
];
