"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/features/seo-agent/hooks/login.hook";
import { Dashboard } from "@/features/seo-agent/components/Dashboard";

export default function DashboardPage() {
  const router = useRouter();
  const { email, authed, ready } = useLogin();

  useEffect(() => {
    if (ready && !authed) router.replace("/login");
  }, [ready, authed, router]);

  if (!ready || !authed) return null;

  return <Dashboard />;
}
