import { Skeleton } from "@/components/ui/skeleton";

export const ExercisesListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex cursor-pointer items-center gap-4 p-5 bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <Skeleton className="w-20 h-20 rounded-lg" />

          <div className="flex flex-col gap-2 flex-grow">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-1/3" />
          </div>

          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      ))}
    </div>
  );
};
