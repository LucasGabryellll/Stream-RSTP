"use client";

import { APP_ROUTER } from "../constants/app-routes";

export const checkIsPublicRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTER.public);

  return appPublicRoutes.includes(asPath);
}