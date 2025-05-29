import Container from "@/components/helpers/Container";
import { useWhishlist } from "@/context/WhishlistContext";
import { memo } from "react";

import ProductCard from "../Products/components/ProductCard";
import type { IProduct } from "@/types/api";

const Whishlist = () => {
  const [state] = useWhishlist();

  return (
    <section>
      <Container>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-muted-foreground">
              {state.whishlist.length} Products
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {state.whishlist?.map((product: IProduct) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(Whishlist);
