import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const ViewQuestionCard: React.FC<{subject: string, difficulty: string, question: string, marks: number}> = ({subject, difficulty, question, marks}) => {
  return (
    <Card className="w-[20vw]">
      <CardHeader>
        <CardTitle>{subject}</CardTitle>
        <CardDescription>Difficulty: <span className="capitalize">{difficulty}</span></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{question}</p>
      </CardContent>
      <CardFooter><span className="text-zinc-400 text-sm">Marks: {marks}</span></CardFooter>
    </Card>
  );
};

export default ViewQuestionCard;
