"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import UserSideBar from "../UserSidebar/userSideBar";
import { useRouter } from "next/navigation";

const Login = ()=>{
    const{data:session } = useSession();

    if(session){
        const router = useRouter();
        const avatarUrl = session?.user?.image as string;
        
        return(
            <div style={{textAlign:"center"}}>
                
                Signed in as {session?.user?.email} <br />
                <p>Welcome {session?.user?.name}</p>
                <Avatar src={avatarUrl}/>
                <div className="h-full w-72 fixed inset-y-0 flex flex-col z-30">
              <UserSideBar />
            </div>
                <button onClick={function(){signOut();event?.preventDefault()}}>Sign Out</button>
            </div>  
        
        )
        
        
    }

    return(
        <div style={{textAlign:"center"}}>
            Not Signed in <br />
            <button onClick={()=>signIn()}>Sign In</button>
        </div>  
    
    )
}

export default Login;