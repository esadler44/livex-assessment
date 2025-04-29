"use client";

import React from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Highlighter from "react-highlight-words";

interface SearchContext {
  search: string;
  setSearch: (search: string) => void;
}

const SearchContext = React.createContext<SearchContext | null>(null);

export function SearchProvider({ children }: React.PropsWithChildren) {
  const [search, setSearch] = React.useState("");

  return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

export function SearchInput() {
  const { setSearch } = useSearch();
  return <Input className="w-96" type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />;
}

interface SearchableContentProps {
  text: string;
}

export function SearchableContent({ text }: SearchableContentProps) {
  const { search } = useSearch();

  const doesPass = text.toLowerCase().includes(search.toLowerCase());

  return <Highlighter className={cn("block", doesPass ? "" : "hidden")} autoEscape searchWords={[search]} textToHighlight={text} />;
}
