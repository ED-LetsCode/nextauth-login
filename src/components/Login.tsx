"use client";

import { FC, useState } from "react";
import { Icons } from "./Icons";
import { Button } from "./ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/Card";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

const Login: FC = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("azure-ad");
    } catch (error) {
      toast({
        title: "Error",
        description: `There was an error while trying to sign in with your'e Microsoft account. Please contact the us.`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[350px] shadow-md">
      <CardHeader>
        <CardTitle className="mb-2 ">Login</CardTitle>
        <CardDescription className="text-justify">
          Click the button below to sign in with your Microsoft account.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full flex justify-center items-center"
          onClick={handleLogin}
        >
          {
            // If login is loading, show loading icon, else show microsoft icon
            isLoading ? (
              <Icons.loading className="animate-spin mr-2" />
            ) : (
              <Icons.microsoft className="w-5 h-5 mr-2" />
            )
          }
          <p className="font-semibold">Login</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
