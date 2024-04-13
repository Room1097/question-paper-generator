"use server";
import { Session } from "next-auth";
import { prisma } from "./prisma";

export async function currProfile(session:Session){

   const user = session?.user;


   try{
    return await prisma.profile.findFirstOrThrow({
        where:{
            email: user?.email!
        }
    })
    
   }
   catch{
    const newProfile = await prisma.profile.create({
        data: { 
            userId  : crypto.randomUUID() ,
            name     :  user?.name!,
            imageUrl  : user?.image!,
            email: user?.email!
          
        },
        
      })
   }
}