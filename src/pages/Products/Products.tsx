import Container from "@/components/helpers/Container";
import { useFetch } from "@/hooks/useFetch";
import type { IProduct } from "@/types/api";
import toast from "react-hot-toast";
import ProductsSkeleton from "./components/skeleton/ProductsSkeleton";
import ProductCard from "./components/ProductCard";

const Products = () => {
  const { data: products, loading, error } = useFetch<IProduct[]>("/products");

  if (loading) {
    return <ProductsSkeleton />;
  }

  if (error) {
    toast.error("Something went wrong");
    return <ProductsSkeleton />;
  }

  return (
    <section>
      <Container>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-muted-foreground">{products?.length} Products</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
