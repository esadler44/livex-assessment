"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-48 p-2 gap-2">
      {['Apps', 'Documents'].map((item) => (
        <Link key={item} href={`/${item.toLowerCase()}`} className={cn("rounded hover:bg-gray-200 p-2 font-bold", pathname === `/${item.toLowerCase()}` ? "underline decoration-sky-500" : "")}>
          {item}
        </Link>
      ))}
    </div>
  );
}