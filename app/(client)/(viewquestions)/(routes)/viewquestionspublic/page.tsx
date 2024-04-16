import ViewQuestions from "@/components/ViewQuestions/viewQuestions";
import ViewQuestionCard from "../../_components/ViewQuestionCard";
import QuestionDB from "../../_components/sample.questionDB.json";
import Subjects from "../../_components/sample.subjectDB.json";
import { Separator } from "@/components/ui/separator";
import { currProfile } from "@/lib/current-profile";
import { useSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";


export default async function Admin() {
  // console.log("hello")
  const session = await getServerSession().then((result) => {
    return result;
  }).catch((err => {
    console.log(err)
  }));
  // console.log(session)
  //@ts-expect-error

  const currUser = await currProfile(session).then(
    (result) => {
      console.log(result)
      return result;
    },
    (err) => {
      console.log(err)
    }
  );

  console.log(currUser)

  const subjects = await prisma.subject.findMany({
    include: {
      questions: {
        where: {
          isPrivate:false
        },
      },
    }
  });

  console.log(subjects)
  return (
    <div className="flex gap-8 pl-16 flex-col items-center pt-12 w-full h-screen">
      <h1 className="text-4xl font-bold w-full text-left pl-[17rem]">
        View Questions Page
      </h1>
      <Separator />
      <div className="flex flex-col">
        {subjects.map((elem) => (
          elem.questions.length > 0 && (
            <div key={elem.id} className="mt-8 flex flex-col">
              <h2 className="text-3xl font-bold capitalize pb-2">{elem.name}</h2>
              <Separator className="p-[1px]" />
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {elem.questions.map(
                  (question) => (
                    <ViewQuestionCard
                      key={question.id}
                      questionId={question.id}
                      subject={elem.name}
                      question={question.description}
                      marks={question.marks}
                      difficulty={question.difficulty}
                      isPrivate={question.isPrivate}
                    />
                  )
                )}
              </div>
            </div>
          )
        ))}
      </div>

    </div>
  );
}