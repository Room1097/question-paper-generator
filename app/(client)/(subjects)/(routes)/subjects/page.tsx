import React from "react";
import SubjectsForm from "@/components/SubjectsForm/subjectsForm";
import ViewSubjectTable from "@/components/ViewSubjectList/viewSubject";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/prisma";


export default async function Subjects() {
  const subjects = await prisma.subject.findMany();


  return (
    <div className="flex flex-col items-center pt-12 w-full h-screen">
      <h1 className="text-3xl w-full text-left pl-[20rem]">Subjects Page</h1>
      <Separator />
      <h2 className="text-xl w-full text-left pl-[25rem]">Add a Subject</h2>
      <div className="mt-4">
        <Card className="w-[40vw] rounded-sm">
          <CardHeader>
            <CardTitle>Add Subject</CardTitle>
            <CardDescription>
              Add a Subject if it does not exist in the below table.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SubjectsForm />
          </CardContent>
        </Card>
      </div>
      <Separator />
      <h2 className="text-xl w-full text-left pl-[25rem]">Subject List</h2>
      <div className="mt-4">
        <ViewSubjectTable subjects={subjects} />
      </div>
    </div>
  );
}
