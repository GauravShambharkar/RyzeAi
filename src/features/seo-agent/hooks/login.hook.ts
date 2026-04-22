"use client";

import { useEffect, useState, type FormEvent } from "react";

// Hardcoded gate — replace with real auth before going public.
const VALID_EMAIL = "admin@ryze.ai";
const VALID_PASSWORD = "ryze2026";
const STORAGE_KEY = "ryze:seo-agent:auth";

type StoredCreds = { email: string; password: string };

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [authed, setAuthed] = useState(false);

  // Restore session from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const stored = JSON.parse(raw) as StoredCreds;
      if (
        stored.email?.toLowerCase() === VALID_EMAIL &&
        stored.password === VALID_PASSWORD
      ) {
        setEmail(stored.email);
        setAuthed(true);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    if (cleanEmail === VALID_EMAIL && password === VALID_PASSWORD) {
      setError(null);
      setAuthed(true);
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ email: cleanEmail, password })
      );
    } else {
      setError("Incorrect email or password.");
    }
  };

  const handleLogout = () => {
    setAuthed(false);
    setEmail("");
    setPassword("");
    setError(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  return {
    email,
    password,
    error,
    authed,
    setEmail,
    setPassword,
    handleSubmit,
    handleLogout,
  };
};
