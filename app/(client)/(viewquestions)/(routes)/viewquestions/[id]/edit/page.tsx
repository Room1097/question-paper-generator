import AddQuestionForm from "@/components/AddQuestionForm/addQuestionForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currProfile } from "@/lib/current-profile";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { SubjectType } from "@/components/AddQuestionForm/addQuestionForm";
import EditQuestionForm from "@/components/EditQuestionForm/edit-question";

export default async function Admin({ params }: { params: { id: string } }) {
  const session = getServerSession();

  const subjects = await prisma.subject.findMany();

  const currQuestion = await prisma.question.findUnique({
    where: {
      id: params.id
    },
  });
  // subjects: JSON.parse(JSON.stringify(subjects))

  return (
    <div className="flex gap-8 pl-16 flex-col items-center pt-12 w-full h-screen">
      <h1 className="text-3xl w-full text-left pl-[20rem]">
        Edit Questions Page
      </h1>
      <Separator />
      <div>
        <Card className="w-[60vw] rounded-sm">
          <CardHeader>
            <CardTitle>Edit Question</CardTitle>
            <CardDescription>
              Edit the Question by filling the given fields.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EditQuestionForm subjects={subjects} question={currQuestion!} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
