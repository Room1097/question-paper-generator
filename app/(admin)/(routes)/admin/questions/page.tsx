import Header from "@/components/Dashboard/Header";
import QuestionCard from "./_components/QuestionCard";
import { prisma } from "@/lib/prisma";

export default async function AdminQuestions() {
  const questions = await prisma.question.findMany({
    include:{
      subject:{
       select:{
        name:true
       }
      }
    }
  })
  return (
    <div className="flex flex-col gap-8">
      <Header>Questions</Header>
      <div className="grid grid-cols-2 gap-6">
        {questions.map((elem)=>(
          <QuestionCard
          key={elem.id}
          difficulty={elem.difficulty}
          question={elem.description}
          questionId={elem.id}
          subject={elem.subject.name}
          marks={elem.marks}
          isPrivate={elem.isPrivate}
        />
        ))}
        {/* <QuestionCard
          difficulty="Hard"
          question="What is 2+2?"
          questionId="1"
          subject="maths"
          marks={2}
          isPrivate={true}
        /> */}
      </div>
    </div>
  );
}
