"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/features/seo-agent/hooks/login.hook";
import { Chat } from "@/features/seo-agent/components/Chat";

export default function SeoAgentPage() {
  const router = useRouter();
  const { email, authed, ready } = useLogin();

  // Not authed → bounce to /login.
  useEffect(() => {
    if (ready && !authed) router.replace("/login");
  }, [ready, authed, router]);

  // While hydrating, or if we're about to redirect, render nothing.
  if (!ready || !authed) return null;

  return <Chat userEmail={email} />;
}
