import { currProfile } from "@/lib/current-profile";
import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const handleAuth = async()=>{
    const session=await getServerSession();
        if (!session) {
          return new Error("Unauthorised");
        }
        
        const profile = await currProfile(session).then(
            (result)=>{
              console.log(result)
              return result;
            },
            (err)=>{
              console.log(err)
            }
          );
          if (!profile){
            return new Error("Unauthorised");
          }
}

 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    verifyFile: f({image :{maxFileSize:"4MB",maxFileCount:1}})
    .onUploadComplete(()=>{}),
    questionFile : f({image :{maxFileSize:"4MB",maxFileCount:1}})
    .onUploadComplete(()=>{})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;