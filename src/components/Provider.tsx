"use client";
import { FC } from "react";
import { SessionProvider } from "next-auth/react";

export type ProviderProps = {
  children: React.ReactNode;
};

const Provider: FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
