import SubjectsForm from "@/components/SubjectsForm/subjectsForm";
import ViewSubjectTable from "@/components/ViewSubjectList/viewSubject";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Subjects() {
  return (
    <div className="flex gap-8 pl-16 flex-col items-center pt-12 w-full h-screen">
      <h1 className="text-3xl w-full text-left pl-[20rem]">
        Subjects Page
      </h1>
      <Separator />
      <h1 className="text-xl w-full text-left pl-[25rem]">Add a Subject</h1>
      <div>
        <Card className="w-[40vw] rounded-sm">
          <CardHeader>
            <CardTitle>Add Subject</CardTitle>
            <CardDescription>
              Add a Subject if it does not Exist in the below table.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SubjectsForm />
          </CardContent>
        </Card>
      </div>
      <Separator />
      <h1 className="text-xl w-full text-left pl-[25rem]">Subject List</h1>
      <div>
        <ViewSubjectTable />
      </div>
    </div>
  );
}
