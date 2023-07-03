"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Icons } from "./Icons";
import { useSession, signOut } from "next-auth/react";

const UserProfile = () => {
  const { data: session } = useSession();

  const getUserInitials = (name: string): string => {
    const nameParts = name.split(" ");
    // If there is only one name, return the first letter
    if (nameParts.length === 1) return nameParts[0].charAt(0);
    console.log(nameParts);
    // If there are only two names, return the first letter of each
    // Azure AD returns the last name first, so we need to reverse the order
    // Example name: "Smith John" => "JS"
    return nameParts[1].charAt(0) + nameParts[0].charAt(0);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-10 w-10  ">
            <AvatarImage src={session?.user?.image || ""} alt="" />
            <AvatarFallback>
              {getUserInitials(session?.user?.name || "")}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col gap-y-2">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            signOut({
              callbackUrl: "/login",
            })
          }
        >
          <Icons.logOut className="w-4 h-4 mr-2 " />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
