import { FC } from "react";
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

const Login: FC = ({}) => {
  return (
    <Card className="w-[350px] shadow-md">
      <CardHeader>
        <CardTitle className="mb-2 ">Anmelden</CardTitle>
        <CardDescription className="text-justify">
          Klicke auf den Button um dich mit deinem Microsoft Account anzumelden.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full flex justify-center items-center"
        >
          <Icons.microsoft className="w-5 h-5 mr-2" />
          <p className="font-semibold">Anmelden</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
