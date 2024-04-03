"use client"
import React from 'react'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { ModeToggle } from '../ModeToggle/ModeToggle'
import { useRouter } from 'next/navigation'

const UserSideBar = () => {
    const router = useRouter()
    
  return (
    <div className='h-full w-full bg-zinc-400 dark:bg-zinc-950'>
        <div className=' w-full h-24 flex justify-center items-center'>
            <h2 className='text-3xl'>Q.P.G</h2>
        </div>
        <Separator className='dark: bg-zinc-300 w-11/12 mx-auto mb-6'/>
        <div className=' h-[34rem]'>
            <div className='flex flex-col gap-y-3'>

            <Button onClick={()=>{router.push("/")}} variant="ghost" className='w-full text-md'>
                Make a Paper
            </Button>
            <Button onClick={()=>{router.push("/question")}} variant="ghost" className='w-full text-md'>
                Add a Question
            </Button>
            <Button onClick={()=>{router.push("/viewquestions")}} variant="ghost" className='w-full text-md'>
                View Question
            </Button>
            </div>
        </div>
        <Separator className='dark: bg-zinc-300 w-11/12 mx-auto mb-6'/>
        <div className='flex flex-col items-center justify-center'>
            <ModeToggle/>
        </div>
    </div>
  )
} 

export default UserSideBar