import React from "react";
import { Skeleton } from "../ui/skeleton";

export const SidebarSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-[250px] p-4 bg-gray-100 rounded-lg h-screen justify-between">
      <Skeleton className="h-12 w-full rounded-md" />
      <Skeleton className="h-8 w-full rounded-md" />
      <div className="flex flex-col gap-3 my-4 flex-grow">
        {Object.values([...Array(4)]).map((_, i) => (
          <React.Fragment key={i}>
            <Skeleton key={i} className="h-6 w-4/5 rounded-md" />
            <Skeleton className="h-6 w-1/2 rounded-md" />
            <Skeleton className="h-6 w-1/2 rounded-md" />
            <Skeleton className="h-6 w-1/2 rounded-md" />
          </React.Fragment>
        ))}
      </div>
      <Skeleton className="h-12 w-full rounded-md" />
    </div>
  );
};
