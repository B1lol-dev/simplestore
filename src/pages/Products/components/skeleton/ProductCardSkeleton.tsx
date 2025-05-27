import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card>
      <CardHeader className="flex justify-center items-center py-7">
        <Skeleton className="h-[382px] w-[300px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-10 w-full mt-6" />
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;
