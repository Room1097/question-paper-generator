import { currProfile } from "@/lib/current-profile";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


// PUT 

export async function PATCH(Request : Request) {
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
      const newProfile = await prisma.profile.update({
        where: {
          id: req.profileId
        },
        data: {
          status : req.status
        },
      })
      return NextResponse.json(newProfile)
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
      const deletedProfile = await prisma.question.delete({
        where: {
          id: req.profileId
        }
      })
      return NextResponse.json(deletedProfile)
  } catch (error) {
      console.log("SERVERS_DELETE",error);
      return new NextResponse("Internal Error",{status:500});
  }
}
