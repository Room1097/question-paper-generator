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

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        <Card className="w-[60vw]">
          <CardHeader>
            <CardTitle>Select Questions</CardTitle>
            <CardDescription>
              Select your Questions by Inserting all the fields.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <GetQuestionForm />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Submit</Button>
            <Button variant="outline">Cancel</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
