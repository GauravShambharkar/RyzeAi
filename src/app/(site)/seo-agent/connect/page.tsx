"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/features/seo-agent/hooks/login.hook";
import { Connect } from "@/features/seo-agent/components/Connect";

export default function ConnectPage() {
  const router = useRouter();
  const { email, authed, ready } = useLogin();

  useEffect(() => {
    if (ready && !authed) router.replace("/login");
  }, [ready, authed, router]);

  if (!ready || !authed) return null;

  return <Connect userEmail={email || ""} />;
}
