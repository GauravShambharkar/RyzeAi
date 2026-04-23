import type { Metadata } from "next";
import { Toaster } from "sonner";
import { GlobalAuthGuard } from "@/components/GlobalAuthGuard";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryze.ai | The Future of Smarter Automation",
  description: "Automate your busywork with intelligent agents that learn, adapt, and execute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className=" selection:bg-accent/30 selection:text-accent-foreground">
        <GlobalAuthGuard />
        {children}
        <Toaster
          position="top-right"
          theme="light"
          richColors
          closeButton
          expand
          toastOptions={{
            classNames: {
              toast:
                "rounded-2xl border border-black/5 shadow-[0_12px_40px_-12px_rgba(20,20,20,0.18)]",
            },
          }}
        />
      </body>
    </html>
  );
}
