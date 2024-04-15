import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
const SideMenu = () => {
  return (
    <div className="flex flex-col sticky w-[20vw] h-screen bg-zinc-900 gap-4 border-2 border-zinc-600">
      <div className="w-full h-[15vh] border-b-2 border-zinc-600 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold pb-2">Q.P.G.</h1>
        <h3 className="text-sm underline">Admin</h3>
      </div>
      <Button variant="ghost" className="active:scale-95">
        <Link href="/">Dashboard</Link>
      </Button>
      <Button variant="ghost" className="active:scale-95">
        <Link href="/">Questions</Link>
      </Button>
      <Button variant="ghost" className="active:scale-95">
        <Link href="/">Users</Link>
      </Button>
      <Button variant="ghost" className="active:scale-95">
        <Link href="/">Verification</Link>
      </Button>
    </div>
  );
};

export default SideMenu;
