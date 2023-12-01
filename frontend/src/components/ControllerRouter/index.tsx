"use client";
import { ReactNode } from "react";

import { checkIsPublicRoute } from "@/functions/check-is-public-router";
import { usePathname } from "next/navigation";
import { PrivateRoute } from "../PrivateRouter";

interface ControllerRouterProps {
    children: ReactNode
}

export function ControllerRouter({ children }: ControllerRouterProps) {

    const pathname = usePathname();
    const isPublicPage = checkIsPublicRoute(pathname);

    return (
        <>
            {isPublicPage && children}

            {!isPublicPage &&
                <PrivateRoute>
                    {children}
                </PrivateRoute>
            }
        </>
    );
}