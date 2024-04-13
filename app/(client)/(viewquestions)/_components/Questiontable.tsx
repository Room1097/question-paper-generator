'use client'
import ViewQuestions from "@/components/ViewQuestions/viewQuestions";
import ViewQuestionCard from "./ViewQuestionCard";
import QuestionDB from "./sample.questionDB.json";
import Subjects from "./sample.subjectDB.json";
import { Separator } from "@/components/ui/separator";
import { currProfile } from "@/lib/current-profile";
import { useSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export default async function Admin() {
  console.log("hello")
  const {data : session } = useSession();

    const currUser = currProfile(session)
    


  const questions = await prisma.question.findMany({
    where:{
       //@ts-expect-error
      profileId:currUser.id
    }
  })
  
  console.log(questions)
  return (
    <div className="flex gap-8 pl-16 flex-col items-center pt-12 w-full h-screen">
      <h1 className="text-4xl font-bold w-full text-left pl-[17rem]">
        View Questions Page
      </h1>
      <Separator />
      <div className="flex flex-col">
        {Subjects.map((elem) => (
          <div key={elem.id} className="mt-8 flex flex-col">
            <h2 className="text-3xl font-bold capitalize pb-2">{elem.name}</h2>
            <Separator className="p-[1px]"/>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {QuestionDB.filter((item) => item.subject === elem.name).map(
                (question) => (
                  <ViewQuestionCard
                    key={question.id}
                    subject={question.subject}
                    question={question.question}
                    marks={question.marks}
                    difficulty={question.difficulty}
                  />
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <ViewQuestions />
    </div>
  );
}
