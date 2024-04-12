'use client';
import { Button } from "@/components/ui/button";
import { signIn, useSession} from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const{data:session } = useSession();

  if(session){
    redirect("/")
  }
  return (
      <Button onClick={function(){signIn();} } variant="ghost" className='w-full text-md active:scale-95'>
      Log in 
    </Button>
  );
}