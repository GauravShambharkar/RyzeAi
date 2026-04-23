"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";

// Hardcoded gate — replace with real auth before going public.
const VALID_EMAIL = process.env.EMAIL_ID || "admin@ryze.ai";
const VALID_PASSWORD = process.env.PASSWORD || "ryze2026";
const STORAGE_KEY = "ryze:seo-agent:auth";
const AUTH_EVENT = "ryze:seo-agent:auth-change";
const SUBMIT_DELAY_MS = 800;

type StoredCreds = { email: string; password: string };

export const useLogin = () => {
    const [email, setEmail] = useState(VALID_EMAIL);
    const [password, setPassword] = useState(VALID_PASSWORD);
    const [error, setError] = useState<string | null>(null);
    const [authed, setAuthed] = useState(false);
    const [ready, setReady] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reads storage and syncs local state. Runs on mount + whenever auth
    // changes anywhere in the app (custom event) or in another tab (storage event).
    const sync = useCallback(() => {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            setAuthed(false);
            return;
        }
        try {
            const stored = JSON.parse(raw) as StoredCreds;
            if (
                stored.email?.toLowerCase() === VALID_EMAIL &&
                stored.password === VALID_PASSWORD
            ) {
                setEmail(stored.email);
                setAuthed(true);
                return;
            }
            window.localStorage.removeItem(STORAGE_KEY);
        } catch {
            window.localStorage.removeItem(STORAGE_KEY);
        }
        setAuthed(false);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        sync();
        setReady(true);

        window.addEventListener(AUTH_EVENT, sync);
        window.addEventListener("storage", sync);
        return () => {
            window.removeEventListener(AUTH_EVENT, sync);
            window.removeEventListener("storage", sync);
        };
    }, [sync]);

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
                window.dispatchEvent(new Event(AUTH_EVENT));
            } else {
                setError("Incorrect email or password.");
            }
            setIsSubmitting(false);
        }, SUBMIT_DELAY_MS);
    };

    const handleLogout = () => {
        setAuthed(false);
        setEmail(VALID_EMAIL);
        setPassword(VALID_PASSWORD);
        setError(null);
        if (typeof window !== "undefined") {
            window.localStorage.removeItem(STORAGE_KEY);
            window.dispatchEvent(new Event(AUTH_EVENT));
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
