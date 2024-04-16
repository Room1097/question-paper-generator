"use client";
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
import { PencilIcon, TrashIcon } from "lucide-react";
import axios from "axios";

// Edit div
function UpdateQuestion({ id }: { id: string }) {
  return (
    <Link
      href={`/viewquestions/${id}/edit`}
      className="rounded-md border p-2 hover:bg-white hover:text-black ml-5"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

async function DeleteQuestion({
  question,
}: {
  question: { questionId: string; subject: string };
}) {
  async function deleteQuestionButton(){
    try {
      await axios.delete(`/api/question`, {data: question});

      console.log("deleted question")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="rounded-md border p-2 hover:bg-red-700 hover:text-white" onClick={deleteQuestionButton} >
      <TrashIcon className="w-5" />
    </div>
  );
}

const ViewQuestionCard: React.FC<{
  questionId: string;
  subject: string;
  difficulty: string;
  question: string;
  marks: number;
  isPrivate: Boolean;
}> = ({ questionId, subject, difficulty, question, marks, isPrivate }) => {
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
        <span className="text-zinc-400 text-sm">Marks: {marks}</span>
        {isPrivate && (
          <div className="flex flex-row">
            <DeleteQuestion
              question={{ questionId: questionId, subject: subject }}
            />
            <UpdateQuestion id={questionId}/>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ViewQuestionCard;
