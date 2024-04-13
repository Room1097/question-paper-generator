"use client"

import {useSession } from "next-auth/react"
import {Avatar} from "@nextui-org/avatar";
import { redirect } from "next/navigation";
import { currProfile } from "@/lib/current-profile";
const Profile = ()=>{
    const{data:session } = useSession();
    
    if(session){

    
        const avatarUrl = session?.user?.image as string;
        return(
            <div className="mt-5">
                <Avatar src={avatarUrl}/>
                 {session?.user?.name}
            </div>  
        
        )
        
        
    }
    else{
    redirect('/login');
}
}

export default Profile;