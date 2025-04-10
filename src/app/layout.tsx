import type React from "react";
import "@lib/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@components/ThemeProvider";
import { MainNav } from "@components/MainNav/MainNav";
import { SearchInput } from "@components/SearchInput";
import { ModeToggle } from "@components/ModeToggle";
import { UserNav } from "@components/UserNav/UserNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeedASub - On-Demand Football Players",
  description:
    "Find last-minute players for your football matches or join a team as a substitute player.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <div className="border-b">
              <div className="flex items-center h-16 px-4">
                <MainNav />
                <div className="flex items-center ml-auto space-x-4">
                  <SearchInput />
                  <ModeToggle />
                  <UserNav />
                </div>
              </div>
            </div>
            <div className="mx-16 my-8">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
