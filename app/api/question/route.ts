import { currProfile } from "@/lib/current-profile";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(Request : Request) {
    try {
        const req = await Request.json();
        const session=await getServerSession();
        if (!session) {
          return new NextResponse("Unauthorised",{status:400});
        }
        
        const profile = await currProfile(session).then(
            (result)=>{
              console.log(result)
              return result;
            },
            (err)=>{
              console.log(err)
            }
          );
          if (!profile){
            return new NextResponse("Unauthorised",{status:400});
          }
        // console.log("Inside route.ts"+profile)
        const question = await prisma.question.create({
            data:{
                
                profileId:profile.id,
            
                description : req.description,
                imageUrl:"",
                subjectId : req.subjectId,
                difficulty : req.difficulty,
                marks : req.marks,
                isPrivate:false
            }
        })
        return NextResponse.json(question)
    } catch (error) {
        console.log("SERVERS_POST",error);
        return new NextResponse("Internal Error",{status:500});
    }
}