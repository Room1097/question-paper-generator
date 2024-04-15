import SideMenu from "@/components/Dashboard/SideMenu";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
        <SideMenu />
      <div className="container my-6">
        {children}
        </div>
    </div>
  );
}
