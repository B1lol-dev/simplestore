import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const UserCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-10 w-full mt-5" />
      </CardContent>
    </Card>
  );
};

export default UserCardSkeleton;
