import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import DashboardCards from "./DashboardCards";
const Dashboard = () => {
  return (
    <div className="flex">
      <div>
        <SideMenu />
      </div>
      <div className="flex flex-col gap-20">
        <Header />
        <div className="grid grid-cols-3 gap-6 pr-16">
          <DashboardCards title="Users" body="20" sub="Total Active Users" />
          <DashboardCards title="Questions" body="1000" sub="Total Questions" />
          <DashboardCards
            title="Verified Users"
            body="10"
            sub="Total Verified Users"
          />
          <DashboardCards
            title="In Process"
            body="50"
            sub="Users Verification in Progress"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
