import { ColumnDef } from "@tanstack/react-table";

export type SubjectType = {
  id: number;
  name: string;
 
};

export const columns: ColumnDef<SubjectType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "subject",
    header: "Subject Name",
  },
  
];
