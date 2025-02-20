import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

export function CustomSearchInput({}: React.ComponentProps<"form">) {
  return (
    <div className="relative w-full max-w-md">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
        <Input
          id="search"
          placeholder="Search..."
          className="pl-10 w-fit border border-gray-300 bg-white rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
}
