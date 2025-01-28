import { Button } from "@/components/ui/button";
import { SquareUser } from "lucide-react";

export function BoxItem() {
  return (
    <div className="min-w-[200px] bg-white flex-1 rounded-md shadow-md flex flex-col gap-4 p-4 justify-between">
      <div className="flex flex-row items-center gap-4">
        <SquareUser size={26} color="gray" />
        <p className="text-lg font-semibold text-gray-400">
          Contact Information
        </p>
      </div>
      <ul className="text-gray-500">
        <li>Name: Vitalik</li>
        <li>Surname: Burban</li>
        <li>Age: 22</li>
      </ul>
      <Button variant="outline">Edit</Button>
    </div>
  );
}
