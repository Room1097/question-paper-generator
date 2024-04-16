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

import { prisma } from "@/lib/prisma";

const UserTable = async () => {
  const userArray = await prisma.profile.findMany();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users Table</CardTitle>
        <CardDescription>
          View and Manage all the current users on Q.P.G.
        </CardDescription>
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
              {/* <TableHead>Created At</TableHead> */}
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
                {/* <TableCell><span></span></TableCell> */}
                {/* <TableCell>{parseString(user.status)}</TableCell> */}
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical />
                      <span className="sr-only">Actions</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Link href={``}>Edit User Role</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={``}>Delete User</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
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
