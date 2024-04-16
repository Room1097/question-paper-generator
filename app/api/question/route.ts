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
        const question = await prisma.question.create({
            data:{
                
                profileId:profile.id,
            
                description : req.description,
                imageUrl:"",
                subjectId : req.subjectId,
                difficulty : req.difficulty,
                marks : req.marks,
                isPrivate: true  // Hard Coded , change w verification
            }
        })
        return NextResponse.json(question)
    } catch (error) {
        console.log("SERVERS_PUT",error);
        return new NextResponse("Internal Error",{status:500});
    }
}

// PUT 

export async function PUT(Request : Request) {
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
      const question = await prisma.question.update({
        where: {
          id: req.questionId
        },
        data: {
          description:req.description,
          subjectId:req.subjectId,
          marks:req.marks,
          difficulty:req.difficulty,
        },
      })
      return NextResponse.json(question)
  } catch (error) {
      console.log("SERVERS_POST",error);
      return new NextResponse("Internal Error",{status:500});
  }
}

// DELETE
export async function DELETE(Request : Request) {
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
      const question = await prisma.question.delete({
        where: {
          id: req.questionId
        }
      })
      return NextResponse.json(question)
  } catch (error) {
      console.log("SERVERS_DELETE",error);
      return new NextResponse("Internal Error",{status:500});
  }
}
