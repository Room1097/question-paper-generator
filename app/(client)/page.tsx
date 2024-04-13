import GetQuestionForm from "@/components/GetQuestionForm/getQuestionForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/prisma";



export default async function Home() {

  const subjects = await prisma.subject.findMany();

  return (
    <div className="flex gap-8 pl-16 flex-col items-center pt-12 w-full h-screen">
      <h1 className="text-3xl w-full text-left pl-[20rem]">
        Make Question Paper
      </h1>
      <Separator />
      <div>
        <Card className="w-[60vw] rounded-sm">
          <CardHeader>
            <CardTitle>Select Questions</CardTitle>
            <CardDescription>
              Select your Questions by Inserting all the fields.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <GetQuestionForm subjects={subjects}/>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">
              <Link
                href={"/question"}
                className="text-sm underline hover:cursor active:scale-95 dark:text-zinc-400 text-zinc-700"
              >
                Running out of Questions? Click Here!
              </Link>
              <Link
                href={"/viewquestions"}
                className="text-sm underline hover:cursor active:scale-95 dark:text-zinc-400 text-zinc-700"
              >
                See Questions Here!
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
