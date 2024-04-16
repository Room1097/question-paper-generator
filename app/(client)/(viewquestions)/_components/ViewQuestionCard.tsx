import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DeleteQuestion, UpdateQuestion } from "./buttons";

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
