import Header from "@/components/Dashboard/Header";
import QuestionCard from "./_components/QuestionCard";

export default function AdminQuestions() {
  return (
    <div className="flex flex-col gap-8">
      <Header>Questions</Header>
      <div>
        <QuestionCard
          difficulty="Hard"
          question="What is 2+2?"
          questionId="1"
          subject="maths"
          marks={2}
          isPrivate={true}
        />
      </div>
    </div>
  );
}
