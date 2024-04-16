import React from "react";
import Link from "next/link";
import { PencilIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type QuestionCardProps = {
  questionId: string;
  difficulty: string;
  subject: string;
  question: string;
  marks: number;
  isPrivate: boolean;
};

function UpdateQuestion({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/questions/${id}/edit`}
      className="rounded-md border p-2 active:scale-95"
    >
      <PencilIcon className="w-5 h-5" />
    </Link>
  );
}

const QuestionCard = ({
  questionId,
  difficulty,
  subject,
  question,
  marks,
  isPrivate,
}: QuestionCardProps) => {
  return (
    <div>
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
          <div className="flex gap-4">
            <UpdateQuestion id={questionId} />
            <Button className="p-6 h-5 w-5 active:scale-95" variant="destructive">
              <h1 className="text-2xl">
                <Trash2 />
              </h1>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuestionCard;
