"use client";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import { useRouter } from "next/navigation";
import Login from "../LoginCard/profile";
import { signOut } from "next-auth/react";
import Profile from "../LoginCard/profile";

const UserSideBar = () => {
  const router = useRouter();

  return (
    <div className="h-full w-[20vw] bg-zinc-300 dark:bg-zinc-950">
      <div className=" w-full h-24 flex justify-center items-center">
        <h2 className="text-3xl">Q.P.G</h2>
      </div>

      <Separator className="dark:bg-zinc-400 bg-zinc-700 w-11/12 mx-auto mb-6" />

      <div className=" h-[34rem]">
        <div className="flex flex-col gap-y-3">
          <Button
            onClick={() => {
              router.push("/");
            }}
            variant="ghost"
            className="w-full text-md active:scale-95"
          >
            Random Generation
          </Button>
          <Button
            onClick={() => {
              router.push("/question");
            }}
            variant="ghost"
            className="w-full text-md active:scale-95"
          >
            Add a Question
          </Button>
          <Button
            onClick={() => {
              router.push("/subjects");
            }}
            variant="ghost"
            className="w-full text-md active:scale-95"
          >
            Subjects
          </Button>
          <Button
            onClick={() => {
              router.push("/viewquestions");
            }}
            variant="ghost"
            className="w-full text-md active:scale-95"
          >
           Your Questions
          </Button>
          <Button
            onClick={() => {
              router.push("/viewquestionspublic");
            }}
            variant="ghost"
            className="w-full text-md active:scale-95"
          >
            Community Question
          </Button>
          <Button
            onClick={() => signOut()}
            variant="ghost"
            className="w-full text-md active:scale-95"
          >
            Sign Out
          </Button>
          <Button
            onClick={() => {
              router.push("/verificationportal");
            }}
            variant="ghost"
            className="w-full text-md active:scale-95"
          >
            Verification Portal
          </Button>
        </div>

        <Separator className="dark:bg-zinc-400 bg-zinc-700 w-11/12 mx-auto mb-12" />
        <div className="flex gap-8 items-center justify-center">
          Theme Toggle
          <ModeToggle />
        </div>
        <Separator className="dark:bg-zinc-400 bg-zinc-700 w-11/12 mx-auto mb-12 mt-12" />
      </div>
      <Profile />

      <Separator className="dark:bg-zinc-400 bg-zinc-700 mb-6" />
    </div>
  );
};

export default UserSideBar;
