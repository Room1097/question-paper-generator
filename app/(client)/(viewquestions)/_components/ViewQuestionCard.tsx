import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { PencilIcon } from "lucide-react";

// Edit Button
function UpdateQuestion({ id }: { id: string }) {
  return (
    <Link
      href={`/viewquestions/${id}/edit`}
      className="rounded-md border p-2 hover:bg-white-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}


const ViewQuestionCard: React.FC<{
  questionId :string;
  subject: string;
  difficulty: string;
  question: string;
  marks: number;
  isPrivate: Boolean
}> = ({questionId , subject, difficulty, question, marks, isPrivate }) => {
  return (
    <Card className="w-[28vw]">
      <CardHeader>
        <CardTitle>{difficulty.toUpperCase()}</CardTitle>
        <CardDescription>
          Subject: <span className="capitalize">{subject}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg">{question}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-zinc-400 text-sm">Marks: {marks}</span>{isPrivate && <UpdateQuestion id={questionId}/>}
      </CardFooter>
      
    </Card>
  );
};

export default ViewQuestionCard;
