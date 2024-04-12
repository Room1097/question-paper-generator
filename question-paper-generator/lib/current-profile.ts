
import { Session } from "next-auth";
import { prisma } from "./prisma";
import bcrypt from 'bcrypt';

export async function  currentProfile(user: Session["user"]){
    
    try{
    const currUser = await prisma.profile.findFirstOrThrow({
            where: {email: user?.email},
            select: {id: true},
        });

    console.log("profile  already in db");
    return currUser;
    }
    
    catch{
        console.log("creating new profile");
        const newUser = await prisma.profile.create(
            {
                data: {
                    id: ,
                    userId: user?.email,
                    name :user?.name,
                    imageUrl: user?.image
                    email: user?.email,
                  
                }
            }
        )
    }
}