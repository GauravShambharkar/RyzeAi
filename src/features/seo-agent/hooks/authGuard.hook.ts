"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLogin } from "./login.hook";

// Routes an authed admin should never see — e.g. public marketing pages.
// Navbar also uses this list to hide those links when authed.
export const AUTHED_BLOCKED_ROUTES = ["/ai-marketer", "/mcp"] as const;

const isBlocked = (pathname: string) =>
    AUTHED_BLOCKED_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(route + "/")
    );

/**
 * Mount-once global guard. Once auth is settled, any authed user who lands on
 * a blocked route (or navigates into one) is bounced back to /seo-agent.
 */
export const useGlobalAuthGuard = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { authed, ready } = useLogin();

    useEffect(() => {
        if (!ready || !authed) return;
        if (isBlocked(pathname)) router.replace("/seo-agent");
    }, [authed, ready, pathname, router]);
};
