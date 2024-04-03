"use client";
import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

const GetQuestionForm = () => {
  const getQuestionSchema = z.object({
    subject: z.string().min(2).max(20),
    easy: z.string().min(1).max(3),
    medium: z.string().min(1).max(3),
    hard: z.string().min(1).max(3),
    numberOfQuestions: z.string().min(1).max(2),
    maxMarks: z.string().min(1).max(3),
  });

  type getQuestionType = z.infer<typeof getQuestionSchema>;

  const form = useForm<z.infer<typeof getQuestionSchema>>({
    resolver: zodResolver(getQuestionSchema),
    defaultValues: {
      subject: "",
      easy: "",
      medium: "",
      hard: "",
      numberOfQuestions: "",
      maxMarks: "",
    },
  });

  function onSubmit(values: z.infer<typeof getQuestionSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Maths, Arts, History, etc." {...field} />
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
                      placeholder="Maths, Arts, History, etc."
                      {...field}
                      className="w-[25vw]"
                    />
                  </FormControl>
                  <FormDescription>Enter the Number of Total Questions in Question Paper.</FormDescription>
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
                      placeholder="Maths, Arts, History, etc."
                      {...field}
                      className="w-[25vw]"
                    />
                  </FormControl>
                  <FormDescription>Enter Maximum Marks for the Question Paper.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GetQuestionForm;
