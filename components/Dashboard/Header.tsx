import React from "react";
import { Separator } from "../ui/separator";
const Header = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold pl-16 pt-4">Admin Page</h1>
      <Separator className="w-[80vw] mt-2 p-[1px]"/>
    </div>
  );
};

export default Header;
