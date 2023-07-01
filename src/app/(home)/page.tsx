import { LinkTable } from "./LinkTable";
import { LinkRowType, LinkTableColumns } from "./LinkTableColumns";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  // If there is no session, redirect to login page
  if (!session) {
    redirect("/login");
  }

  const links: LinkRowType[] = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    category: "Category " + i,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  " + i,
    link: "https://google.com",
  }));

  return (
    <div className="h-full flex justify-center items-center">
      <LinkTable columns={LinkTableColumns} data={links} />
    </div>
  );
};

export default page;
