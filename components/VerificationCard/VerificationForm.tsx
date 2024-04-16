import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const VerificationForm = () => {
  return (
    <div className="">
      <form action="" className="flex flex-col gap-8">
        <div className="space-y-2">
          <Label htmlFor="name">Registered Name</Label>
          <Input type="name" id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Registered Email ID</Label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file" className="flex flex-col gap-4">
            Educational Certificate
            <span className="text-sm dark:text-zinc-400">
              Note: UG Students can Apply as well with their HSC/SSC or
              Equivalent Marksheets. PG Students need to Provide their Bachelors
              Degree or Diploma or Equivalent Certificate.
            </span>
          </Label>
          <Input type="file" id="email" name="email" required />
        </div>
        <div className="dark:text-zinc-400">
          Note: All your documents will be private and would not be accessible
          by anyone else.
        </div>
      </form>
    </div>
  );
};

export default VerificationForm;
