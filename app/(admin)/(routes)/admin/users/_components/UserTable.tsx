"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar } from "@nextui-org/avatar";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/formatters";

import { Profile } from "@prisma/client";
import axios from "axios";
interface UserTableProps {
  userArray: Profile[];
  cardTitle: string;
  cardDescription: string;
}

const UserTable = ({
  userArray,
  cardTitle,
  cardDescription,
}: UserTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-0">
                <span className="sr-only">Avatar</span>
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-0">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userArray.map((user) => (
              <TableRow>
                <TableCell>
                  <Avatar src={user.imageUrl} />
                </TableCell>
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{formatDate(user.createdAt)}</TableCell>
                <TableCell>
                  {user.status === "NA" && <h1>Not Applied</h1>}
                  {user.status === "PENDING" && <h1>Pending Approval</h1>}
                  {user.status === "VERIFIED" && <h1>Verified</h1>}
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical />
                      <span className="sr-only">Actions</span>
                    </DropdownMenuTrigger>

                    {user.status === "PENDING" && (
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={async()=>{
                          const values = {
                            profileId : user.id,
                            status : 'VERIFIED'
                          }
                          await axios.patch('/api/profile',values)
                        }} asChild>
                          Give Verification
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={async()=>{
                          const values = {
                            profileId : user.id,
                            status : 'NA'
                          }
                          await axios.patch('/api/profile',values)
                        }} asChild>
                          Reject Application
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>Delete User</DropdownMenuItem>
                      </DropdownMenuContent>
                    )}

                    {user.status === "NA" && (
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={async()=>{
                          const values = {
                            profileId : user.id,
                            status : 'VERIFIED'
                          }
                        }} asChild>
                          Give Verification
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>Delete User</DropdownMenuItem>
                      </DropdownMenuContent>
                    )}

                    {user.status === "VERIFIED" && (
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={async()=>{
                          const values = {
                            profileId : user.id,
                            status : 'NA'
                          }
                          await axios.patch('/api/profile',values)
                        }} asChild>
                          Revoke Verification
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>Delete User</DropdownMenuItem>
                      </DropdownMenuContent>
                    )}
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UserTable;
