"use client";

import { useEffect, useState, type FormEvent } from "react";

// Hardcoded gate — replace with real auth before going public.
const VALID_EMAIL = process.env.EMAIL_ID || "admin@ryze.ai";
const VALID_PASSWORD = process.env.PASSWORD || "ryze2026";
const STORAGE_KEY = "ryze:seo-agent:auth";
const SUBMIT_DELAY_MS = 800;

type StoredCreds = { email: string; password: string };

export const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [authed, setAuthed] = useState(false);
    const [ready, setReady] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Restore session from localStorage on mount
    useEffect(() => {
        if (typeof window === "undefined") return;
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
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
        }
        setReady(true);
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        setError(null);
        setIsSubmitting(true);

        const cleanEmail = email.trim().toLowerCase();

        // Simulated latency — swap for a real API call later.
        setTimeout(() => {
            if (cleanEmail === VALID_EMAIL && password === VALID_PASSWORD) {
                setAuthed(true);
                window.localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify({ email: cleanEmail, password })
                );
            } else {
                setError("Incorrect email or password.");
            }
            setIsSubmitting(false);
        }, SUBMIT_DELAY_MS);
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
        ready,
        isSubmitting,
        setEmail,
        setPassword,
        handleSubmit,
        handleLogout,
    };
};
