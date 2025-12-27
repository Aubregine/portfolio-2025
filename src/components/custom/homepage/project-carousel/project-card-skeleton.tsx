import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export function ProjectCardSkeleton() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4" />
        {/* Description lines */}
        <div className="mt-2 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </CardHeader>
      <CardContent className="flex">
        {/* Project preview image skeleton */}
        <Skeleton className="aspect-3/1 w-full rounded-md" />
      </CardContent>
      <CardFooter className="flex gap-2">
        {/* Button skeletons */}
        <Skeleton className="h-9 flex-3" />
        <Skeleton className="h-9 flex-1" />
      </CardFooter>
    </Card>
  );
}
