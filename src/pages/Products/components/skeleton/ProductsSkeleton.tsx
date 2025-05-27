import Container from "@/components/helpers/Container";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <section>
      <Container>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Products</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array(count)
              .fill("")
              .map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsSkeleton;
