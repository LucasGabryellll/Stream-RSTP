"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { APP_ROUTER } from "../../constants/app-routes";
import { checkUserAuthenticated } from "@/functions/checkUserAuthenticated";

type PrivateProps = {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateProps) {

  const { push } = useRouter();
  const isUserAuthenticated = checkUserAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTER.public.login)
    } 
  }, [isUserAuthenticated, push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
}