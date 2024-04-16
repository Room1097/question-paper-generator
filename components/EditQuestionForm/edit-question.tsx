"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Question } from "@prisma/client";
import { useRouter } from "next/navigation";
// Define type for subjects
export type SubjectType = {
  id: string;
  name: string;
};

export default function EditQuestionForm({
  subjects,
  question
}: {
  subjects: SubjectType[];
  question: Question
}) {
  
  const formSchema = z.object({
    description: z.string().min(2).max(1000),
    subjectId: z.string(),
    difficulty: z.enum(["EASY", "HARD", "MEDIUM"]),
    marks: z.coerce.number().nonnegative(),
    questionId: z.any()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: question.description,
      subjectId: question.subjectId,
      difficulty: question.difficulty,
      marks: question.marks,
      questionId: question.id
    },
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    try {
      console.log(values);
      await axios.put("/api/question", values);
      
      router.refresh();
      router.back();
      
    } catch (error) {
      console.log(error);
    }
 
  }

  const handleCancel = () => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  defaultValue={question.description}
                  id="question"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <FormField
            control={form.control}
            name="subjectId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <div className="w-[15vw]">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={question.subjectId}
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="marks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marks</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={question.marks}
                    className="w-[15vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="difficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Difficulty</FormLabel>
                <FormControl>
                  <div className="w-[15vw]">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={question.difficulty}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a difficulty." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EASY">Easy</SelectItem>
                        <SelectItem value="MEDIUM">Medium</SelectItem>
                        <SelectItem value="HARD">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
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
  );
}
