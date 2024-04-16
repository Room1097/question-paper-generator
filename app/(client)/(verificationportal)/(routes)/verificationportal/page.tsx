import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import VerificationForm from "@/components/VerificationCard/VerificationForm";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Dashboard/Header";

export default function VerificationPortal() {
  return (
    <div className="flex flex-col gap-8 pl-[20rem] pt-8">
      <Header>Verification Portal</Header>

      <div>
        <div className="flex justify-center items-center h-full">
          <Card className="w-[40vw]">
            <CardHeader>
              <CardTitle>Verification Portal</CardTitle>
              <CardDescription>
                Fill in the necessary fields to generate a request for user
                verification.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <VerificationForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
