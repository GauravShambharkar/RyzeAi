import type { Metadata } from "next";
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
    <html lang="en" className="h-full antialiased">
      <body className=" selection:bg-accent/30 selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
