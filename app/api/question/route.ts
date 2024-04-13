import { currProfile } from "@/lib/current-profile";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(Request : Request) {
    try {
        const {description,subjectId,difficulty,marks} = await Request.json();
        const session=getServerSession();
        //@ts-expect-error
        const profile = currProfile(session);
        const question = await prisma.question.create({
            data:{
                //@ts-expect-error
                profileId:profile.id,
                description,
                imageUrl:"",
                subjectId,
                difficulty,
                marks,
                isPrivate:false
            }
        })
        return NextResponse.json(question)
    } catch (error) {
        console.log("SERVERS_POST",error);
        return new NextResponse("Internal Error",{status:500});
    }
}