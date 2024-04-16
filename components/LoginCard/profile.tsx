"use client"

import {useSession } from "next-auth/react"
import {Avatar} from "@nextui-org/avatar";
import { redirect } from "next/navigation";
import { currProfile } from "@/lib/current-profile";
const  Profile = ()=>{
    const{data:session } = useSession();
    
    if(session){

        const profile = currProfile(session);

        const avatarUrl = session?.user?.image as string;
        return(
            <div className="flex flex-col align-center">
                <div className="self-center"><Avatar src={avatarUrl}/></div>
                <div className="self-center">{session?.user?.name}</div>
                 
            </div>  
        
        )
        
        
    }
    else{
    redirect('/login');
}
}

export default Profile;