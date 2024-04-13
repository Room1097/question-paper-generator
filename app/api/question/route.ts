import { currProfile } from "@/lib/current-profile";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(Request : Request) {
    try {
        const req = await Request.json();
        const session=getServerSession();
        //@ts-expect-error
        const profile = currProfile(session);
        console.log(profile)
        const question = await prisma.question.create({
            data:{
                //@ts-expect-error
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