"use client";
import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { generateRandomQuestionSet } from "@/app/actions";
import { SubjectType } from "../ViewSubjectList/columns";

const GetQuestionForm = ({ subjects }: { subjects: SubjectType[] }) => {
  const getQuestionSchema = z.object({
    subject: z.string().min(2).max(20),
    easy: z.coerce.number().nonnegative().min(0).max(100),
    medium: z.coerce.number().nonnegative().min(0).max(100),
    hard: z.coerce.number().nonnegative().min(0).max(100),
    numberOfQuestions: z.coerce.number().nonnegative().min(0).max(100),
    maxMarks: z.coerce.number().nonnegative().min(0).max(100),
  });

  type getQuestionType = z.infer<typeof getQuestionSchema>;

  const form = useForm<z.infer<typeof getQuestionSchema>>({
    resolver: zodResolver(getQuestionSchema),
    defaultValues: {
      subject: "",
      easy: 0,
      medium: 0,
      hard: 0,
      numberOfQuestions: 0,
      maxMarks: 0,
    },
  });

  function onSubmit(values: z.infer<typeof getQuestionSchema>) {
    console.log(values);
    form.reset();
  }

  const handleCancel = () => {
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form action={generateRandomQuestionSet} className="space-y-8">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <div className="w-[15vw]">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Subject." />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((item: SubjectType) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormDescription>Enter Subject Name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 justify-between">
            <FormField
              control={form.control}
              name="easy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Easy Questions</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insert % of Easy Questions"
                      {...field}
                      className="w-[15vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="medium"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medium Questions</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insert % of Medium Questions"
                      {...field}
                      className="w-[15vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hard Questions</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insert % of Hard Questions"
                      {...field}
                      className="w-[15vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4 justify-between">
            <FormField
              control={form.control}
              name="numberOfQuestions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Questions</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="5, 10, 20, etc."
                      {...field}
                      className="w-[25vw]"
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the Number of Total Questions in Question Paper.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxMarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Marks</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="20, 50, 100, etc."
                      {...field}
                      className="w-[25vw]"
                    />
                  </FormControl>
                  <FormDescription>
                    Enter Maximum Marks for the Question Paper.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <Button className="active:scale-95 rounded-[0.5rem]">Submit</Button>
            <Button
              onClick={handleCancel}
              type="reset"
              variant="destructive"
              className="active:scale-95 rounded-[0.5rem]"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GetQuestionForm;
