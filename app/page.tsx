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

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      {/* <h1>Hello World!</h1> */}
      <div>
        <Card className="w-[60vw] rounded-sm">
          <CardHeader>
            <CardTitle>Select Questions</CardTitle>
            <CardDescription>
              Select your Questions by Inserting all the fields.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <GetQuestionForm />
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">
              <Link
                href={"/question"}
                className="text-sm underline text-zinc-400"
              >
                Running out of Questions? Click Here!
              </Link>
              <Link
                href={"/viewquestions"}
                className="text-sm underline text-zinc-400"
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
