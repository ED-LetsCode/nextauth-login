import Login from "@/components/Login";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);
  // If there is a session, redirect to home page
  if (session) {
    redirect("/");
  }

  return (
    <div className="h-full flex justify-center items-center">
      <Login />
    </div>
  );
};

export default Page;
