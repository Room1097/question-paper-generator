import SideMenu from "@/components/Dashboard/SideMenu";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="h-full w-72 fixed inset-y-0 flex flex-col z-30">
        <SideMenu />
      </div>
      <div className="container  pl-[18rem] my-6">{children}</div>
    </div>
  );
}
