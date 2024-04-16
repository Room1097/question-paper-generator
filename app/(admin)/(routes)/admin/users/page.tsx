import Header from "@/components/Dashboard/Header";
import UserTable from "./_components/UserTable";
import VerifiedTable from "./_components/VerifiedTable";
import PendingTable from "./_components/PendingTable";

export default function AdminQuestions() {
  return (
    <div className="flex flex-col gap-6">
      <Header>Users</Header>
      <UserTable />
      <VerifiedTable />
      <PendingTable />
    </div>
  );
}
