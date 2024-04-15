"use client";
import React from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const subjectSchema = z.object({
  subject: z.string().min(2).max(50),
});

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { redirect } from "next/navigation";

const SubjectsForm = () => {
  const form = useForm<z.infer<typeof subjectSchema>>({
    resolver: zodResolver(subjectSchema),
    defaultValues: {
      subject: "",
    },
  });


  const router = useRouter();
  async function onSubmit(values: z.infer<typeof subjectSchema>) {
    try {
      await axios.post("/api/subject", values);
      form.reset();
      router.refresh()
      // redirect("/viewquestion");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {" "}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a Subject Name." {...field} />
                </FormControl>
                <FormDescription>
                  This subject will be added to below List.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default SubjectsForm;
