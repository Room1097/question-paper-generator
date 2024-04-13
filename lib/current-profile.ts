"use server";
import { Session } from "next-auth";
import { prisma } from "./prisma";

export async function currProfile(session:Session){
//@ts-expect-error
   const {name,email,image} = session?.user;


   try{
    return await prisma.profile.findFirstOrThrow({
        where:{
            email: email
        }
    })
    
   }
   catch{
    const newProfile = await prisma.profile.create({
        data: { 
            userId  : crypto.randomUUID() ,
            name     :  name,
            imageUrl  : image,
            email: email
          
        },
        
      })
   }
}