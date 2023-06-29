import { FC } from "react";
import { Icons } from "./Icons";
import UserProfile from "./UserProfile";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="border-b py-3 bg-white shadow-md">
      <div className="flex items-center justify-between container">
        <Link href="/">
          <Icons.logo className="h-8 w-8" />
        </Link>
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
