import { authOptions } from "@/lib/auth"
import nextAuth from "next-auth"
import { signIn, signOut } from "next-auth/react"
import { pages } from "next/dist/build/templates/app-page"

const handler = nextAuth(
authOptions
)
export { handler as GET, handler as POST }
