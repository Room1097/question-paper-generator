import React, { ReactNode } from "react";
import { Separator } from "../ui/separator";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className="text-4xl mb-4">{children}</h1>
      <Separator />
    </div>
  );
};

export default Header;
