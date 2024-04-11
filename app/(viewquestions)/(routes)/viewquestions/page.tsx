import ViewQuestions from "@/components/ViewQuestions/viewQuestions";
import { Separator } from "@/components/ui/separator";
import ViewQuestionCard from "../../_components/ViewQuestionCard";
import QuestionDB from "../../_components/sample.questionDB.json";

export default function Admin() {
  return (
    <div className="flex gap-8 pl-16 flex-col items-center pt-12 w-full h-screen">
      <h1 className="text-3xl w-full text-left pl-[20rem]">
        View Questions Page
      </h1>
      <Separator />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {QuestionDB.map((item) => (
          <ViewQuestionCard
            key={item.id}
            subject={item.subject}
            question={item.question}
            marks={item.marks}
            difficulty={item.difficulty}
          />
        ))}
      </div>

      <ViewQuestions />
    </div>
  );
}
