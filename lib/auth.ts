import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    // CredentialsProvider({
    
    //   name: 'Sign In',
    //   credentials: {
    //     email : {label: "Email", placeholder: "Email"},
    //     password: { label: "Password", type: "Password" },
    //   },

    
    //   async authorize(credentials) {
        
    //     if(!credentials || !credentials.email || !credentials.password)  // Profile me password hi nahi hai :)
    //       return null;
    //     const loginUser = await prisma.profile.findFirst({
    //         where: {email: credentials?.email}
            
    //       })

    //     if(loginUser && loginUser.password === )
    //     }
    // })
  ]
}