import React from "react";
import UserProfile from "@/components/shared/UserProfile";
import { getUserSubscriptions } from "@/lib/database/actions/subscription.action";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
const Page = async () => {
  const session = await getServerSession(authOptions);
  const userSubscriptions = await getUserSubscriptions(session?.user.id);

  return <UserProfile userSubscriptions={userSubscriptions} />;
};

export default Page;
