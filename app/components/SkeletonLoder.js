import { Skeleton } from "@shadcn/ui";

export default function LoadingState() {
  return (
    <div>
      <Skeleton className="w-full h-6 mb-2" />
      <Skeleton className="w-full h-6 mb-2" />
      <Skeleton className="w-full h-6" />
    </div>
  );
}
