import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IProduct } from "@/types/api";
import { Badge } from "@/components/ui/badge";
import { Check, Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useWhishlist } from "@/context/WhishlistContext";
import { memo } from "react";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: IProduct }) => {
  const [whishlistState, dispatchWhishlist] = useWhishlist();
  const [cartState, dispatchCart] = useCart();

  const isInWhishlist = whishlistState.whishlist.find(
    (item: { id: number }) => item.id === product.id
  );

  const isInCart = cartState.cart.find(
    (item: { id: number }) => item.id === product.id
  );

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden relative bg-white mx-5 rounded-md">
          <div className="absolute right-3 top-3 flex flex-col gap-3">
            <Button
              className="rounded-full size-10"
              onClick={() =>
                dispatchWhishlist({
                  type: "TOGGLE_WHISHLIST",
                  payload: product,
                })
              }
            >
              <Heart size={256} fill={isInWhishlist ? "black" : "none"} />
            </Button>
            <Button
              className="rounded-full size-10"
              onClick={() =>
                dispatchCart({
                  type: "TOGGLE_CART",
                  payload: product,
                })
              }
            >
              {!isInCart ? <ShoppingCart size={256} /> : <Check />}
            </Button>
          </div>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="h-full w-full object-contain p-4 rounded-md"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <CardTitle className="line-clamp-2 text-sm leading-tight">
            {product.title}
          </CardTitle>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">
              {product?.rating?.rate} ({product?.rating?.count})
            </span>
          </div>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default memo(ProductCard);
