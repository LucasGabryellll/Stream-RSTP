"use client";

import { checkIsPublicRoute } from "@/functions/check-is-public-router";
import { usePathname } from "next/navigation";

export function Router() {
    const pathname = usePathname();
    const isPublicPage = checkIsPublicRoute(pathname);

    return { isPublicPage }
}