import AddQuestionForm from "@/components/AddQuestionForm/addQuestionForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Admin() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      {/* <h1>Hello World!</h1> */}
      <div>
        <Card className="w-[60vw] rounded-sm">
          <CardHeader>
            <CardTitle>Add Question</CardTitle>
            <CardDescription>
              Add a Question by filling the given fields.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AddQuestionForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
