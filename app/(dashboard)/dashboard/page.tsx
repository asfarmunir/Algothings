import Dashboard from "@/components/shared/Dashboard";
import { getUserSubscriptions } from "@/lib/database/actions/subscription.action";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const userSubscriptions = await getUserSubscriptions(session?.user.id);

  return <Dashboard userSubscriptions={userSubscriptions} />;
};

export default Page;
