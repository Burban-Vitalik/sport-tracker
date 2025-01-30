import { Skeleton } from "@/components/ui/skeleton";

export const PageSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="mb-4">
        <Skeleton className="h-6 mb-2 w-1/2" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-[260px] flex-1 p-6 bg-gray-200 rounded-lg shadow-lg flex flex-col gap-4"
          >
            <Skeleton className="h-12 w-12 mb-4 mx-auto rounded-full" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
};
