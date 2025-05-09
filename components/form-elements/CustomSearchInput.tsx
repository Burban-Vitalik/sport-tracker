import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
} & React.ComponentProps<"form">;

export function CustomSearchInput({ className }: Props) {
  return (
    <div className={cn("relative w-full", className)}>
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
        <Input
          id="search"
          placeholder="Search..."
          className="pl-10 w-full border border-gray-300 bg-white rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
}
