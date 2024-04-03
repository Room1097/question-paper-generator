"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "../ui/button";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
const Login = ()=>{
    const{data:session } = useSession();

    if(session){
        const avatarUrl = session?.user?.image as string;
        return(
            <>
                Signed in as {session?.user?.email} <br />
                <p>Welcome {session?.user?.name}</p>
                <Avatar src={avatarUrl}/>
                <button onClick={()=>signOut()}>Sign Out</button>
            </>  
        
        )
        
        
    }

    return(
        <div>
            Not Signed in <br />
            <button onClick={()=>signIn()}>Sign In</button>
        </div>  
    
    )
}

export default Login;