"use server";
import { Session } from "next-auth";
import { prisma } from "./prisma";

export async function currProfile(session:Session){

   const user = session?.user;
    
    // console.log(session)
   try{
    const Profile = await prisma.profile.findUniqueOrThrow({
        where:{
            email: user?.email!
        }
    })
    // console.log(Profile)
    return Profile
   }
   catch{
    console.log("New Profile being generated...")
    const newProfile = await prisma.profile.create({
        data: { 
            userId  : crypto.randomUUID() ,
            name     :  user?.name!,
            imageUrl  : user?.image!,
            email: user?.email!,
            verifyimageUrl : ""
          
        },
        
      })
      return newProfile
   }
}