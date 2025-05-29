import Container from "@/components/helpers/Container";
import { useCart } from "@/context/CartContext";
import ProductCard from "../Products/components/ProductCard";
import type { IProduct } from "@/types/api";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const Cart = () => {
  const [state, dispatch] = useCart();

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.success("Cart has been cleaned");
  };

  return (
    <section>
      <Container>
        <div className="space-y-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">Cart</h1>
            <Button className="ml-auto" onClick={handleClearCart}>
              Clear cart
            </Button>
            <p className="text-muted-foreground ml-3">
              {state.cart.length} Products
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {state.cart?.map((product: IProduct) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
