import UserSideBar from "@/components/UserSidebar/userSideBar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="h-full w-72 fixed inset-y-0 flex flex-col z-30">
        <UserSideBar />
      </div>
      <main className="h-full"> {children}</main>
      <Toaster />
    </div>
  );
}
