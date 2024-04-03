import { ColumnDef } from "@tanstack/react-table";

export type QuestionType = {
  id: number;
  question: string;
  marks: number;
  difficulty: string;
  subject: string;
  privacy: "private" | "public";
};

export const columns: ColumnDef<QuestionType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "question",
    header: "Question",
  },
  {
    accessorKey: "marks",
    header: "Marks",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "privacy",
    header: "Privacy",
  },
];
