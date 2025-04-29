import "./globals.css";
import React from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatbotPopover } from "@/components/ChatbotPopver";
import { SearchProvider } from "@/components/Search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Live Chat App",
  description: "A live chat app with chatbot and navigation UI.",
};

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background w-dvw h-dvh flex flex-col`}>
        <SearchProvider>
          <Navbar />
          <div className="flex flex-1 min-h-0">
            <Sidebar />
            <Separator orientation="vertical" />
            <ScrollArea className="flex-1 bg-background p-4 overflow-y-auto">
              {children}
            </ScrollArea>
            <ChatbotPopover />
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}
