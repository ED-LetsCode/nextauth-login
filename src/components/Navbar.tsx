import { Icons } from "./Icons";
import UserProfile from "./UserProfile";
import Link from "next/link";
import ThemeActions from "./theme/ThemeActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="border-b py-3  shadow-md">
      <div className="flex items-center justify-between container">
        <Link href="/">
          <Icons.logo className="h-8 w-8" />
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeActions />
          {
            // If there is a session, show the user profile
            session && <UserProfile />
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
