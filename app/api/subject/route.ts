import { currProfile } from "@/lib/current-profile";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(Request : Request) {
    try {
        const req = await Request.json();
        const session=await getServerSession();
        //@ts-expect-error
        const profile = currProfile(session);
        const subject = await prisma.subject.create({
            data:{
                name : req.subject, 
            }
        })
        return NextResponse.json(subject)
    } catch (error) {
        console.log("SERVERS_POST",error);
        return new NextResponse("Internal Error",{status:500});
    }
}