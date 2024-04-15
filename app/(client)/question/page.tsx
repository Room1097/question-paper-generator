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


export default async function Admin() {
  const session  = getServerSession();
    //@ts-expect-error
    const currUser = currProfile(session)
    const subjects = await prisma.subject.findMany();
    // subjects: JSON.parse(JSON.stringify(subjects))

  return (
    <div className="flex gap-8 pl-16 flex-col items-center pt-12 w-full h-screen">
      <h1 className="text-3xl w-full text-left pl-[20rem]">
        Add Questions Page
      </h1>
      <Separator />
      <div>
        <Card className="w-[60vw] rounded-sm">
          <CardHeader>
            <CardTitle>Add Question</CardTitle>
            <CardDescription>
              Add a Question by filling the given fields.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AddQuestionForm subjects = {subjects}/>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}
