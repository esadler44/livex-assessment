import { SearchableContent } from "@/components/Search";

export default function DocumentsPage() {
  return <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-bold">Documents</h1>
    {Array.from({ length: 100 }).map((_, i) => (
      <div key={i}>
        <SearchableContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <SearchableContent text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <SearchableContent text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <SearchableContent text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>
    ))}
  </div>;
}