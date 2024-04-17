import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { prisma } from "@/lib/prisma";
import DashboardCards from "./DashboardCards";
import { formatNumber } from "@/lib/formatters";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const userCountData = await prisma.profile.aggregate({
        _count: {
          id: true,
        },
      });
      const questionCountData = await prisma.question.aggregate({
        _count: {
          id: true,
        },
      });
      const verifyCountData = await prisma.profile.aggregate({
        _count: {
          id: true,
        },
        where: {
          status: "VERIFIED",
        },
      });
      const pendingCountData = await prisma.profile.aggregate({
        _count: {
          id: true,
        },
        where: {
          status: "PENDING",
        },
      });

      return {
        userCount: userCountData?._count.id || 0,
        questionCount: questionCountData?._count.id || 0,
        verifiedCount: verifyCountData?._count.id || 0,
        pendingCount: pendingCountData?._count.id || 0,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return undefined;
    }
  };

  const renderDashboard = async () => {
    const data = await fetchData();

    if (!data) {
      return <div>Error fetching data</div>;
    }

    const { userCount, questionCount, verifiedCount, pendingCount } = data;

    return (
      <div className="flex flex-col gap-20">
        <Header>Dashboard</Header>
        <div className="grid grid-cols-3 gap-6 pr-8">
          <DashboardCards
            title="Users"
            body={formatNumber(userCount)}
            sub="Total Active Users"
          />
          <DashboardCards
            title="Questions"
            body={formatNumber(questionCount)}
            sub="Total Questions"
          />
          <DashboardCards
            title="Verified Users"
            body={formatNumber(verifiedCount)}
            sub="Total Verified Users"
          />
          <DashboardCards
            title="In Process"
            body={formatNumber(pendingCount)}
            sub="Users Verification in Progress"
          />
        </div>
      </div>
    );
  };

  return renderDashboard();
};

export default Dashboard;
