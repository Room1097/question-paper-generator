"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(1),
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
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { currProfile } from "@/lib/current-profile";

const VerificationForm = () => {
  const { data: session } = useSession();

  if (session) {
    const profile = currProfile(session);
  }
  const name = session?.user?.name as string;
  const email = session?.user?.email as string;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name || "", 
      email: email || "", 
    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {

    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registered Name</FormLabel>
              <FormControl>
                <Input value={name} readOnly />
              </FormControl>
              <FormDescription>
                This is your Registered Name, displayed in the Sidebar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input defaultValue={email} type="email" />
              </FormControl>
              <FormDescription>
                This is Your Registered Email Id.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Apply</Button>
      </form>
    </Form>
  );
};

export default VerificationForm;
