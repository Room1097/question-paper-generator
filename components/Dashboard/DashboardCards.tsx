import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { formatNumber } from "@/lib/formatters";

type DashboardCardProps = {
    title: string;
    sub: string;
    body: string;
  };

const DashboardCards = ({ title, sub, body }: DashboardCardProps) => {
  return (
    <div className="pl-16">
      <Card className="">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {sub}
          </CardDescription>
        </CardHeader>
        <CardContent>
         <h1 className="text-4xl font-bold">{formatNumber(Number(body))}</h1>
        </CardContent>

      </Card>
    </div>
  );
};

export default DashboardCards;
