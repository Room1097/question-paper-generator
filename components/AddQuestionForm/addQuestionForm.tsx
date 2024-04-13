'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  question: z.string().min(2).max(1000),
  subjectId: z.string(),
  difficulty: z.enum(["EASY", "HARD", "MEDIUM"]),
  marks: z.string().min(1).max(2),
});

export default function AddQuestionForm(subjects : any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      subjectId: "",
      difficulty: "EASY",
      marks: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post("/api/question",values)
    } catch (error) {
      console.log(error)
    }
    form.reset();
  }

  const handleCancel = () => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Type your question here."
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
                  <Input
                    {...field}
                    placeholder="Subject"
                    className="w-[15vw]"
                  />
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
                    placeholder="1,2,3,5, etc."
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
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a difficulty." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
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
