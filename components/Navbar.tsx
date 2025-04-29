import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "@/components/Search";

export function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-background">
      <Link href="/" className="font-bold text-lg">
        <Image src="/logo.webp" alt="Logo" width={32} height={32} />
      </Link>
      <SearchInput />
    </div>
  );
}