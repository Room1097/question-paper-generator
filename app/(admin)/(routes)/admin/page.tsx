import Header from "@/components/Dashboard/Header";
import SideMenu from "@/components/Dashboard/SideMenu";
import Login from "@/components/LoginCard/Login";
import LoginCard from "@/components/LoginCard/loginCard";

export default function Admin() {
  return (
    <div>
      <Header/>
      <Login/>
      <SideMenu/>
    </div>
  );
}
