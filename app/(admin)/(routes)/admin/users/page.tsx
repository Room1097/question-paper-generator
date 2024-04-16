import Header from "@/components/Dashboard/Header";
import UserTable from "./_components/UserTable";
import { prisma } from "@/lib/prisma";
import { ConstructionIcon } from "lucide-react";
import { notFound } from "next/navigation";

export default async function AdminUsers() {
  const userArray = await prisma.profile.findMany({
    where: {
      status: "NA",
    },
  });

  const pendingArray = await prisma.profile.findMany({
    where: {
      status: "PENDING",
    },
  });

  if (!pendingArray) {
    return notFound();
  }
  const verifiedArray = await prisma.profile.findMany({
    where: {
      status: "VERIFIED",
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <Header>Users</Header>
      <UserTable
        userArray={userArray}
        cardTitle="User Table"
        cardDescription="View and Manage current users of Q.P.G."
      />
      <UserTable
        userArray={pendingArray}
        cardTitle="Pending Applications Table"
        cardDescription="View and Manage all the pending Applications for verification of  users of Q.P.G."
      />
      <UserTable
        userArray={verifiedArray}
        cardTitle="Verified User Table"
        cardDescription="View and Manage Verified users of Q.P.G."
      />
    </div>
  );
}
