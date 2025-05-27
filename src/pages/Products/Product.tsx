import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetch } from "@/hooks/useFetch";
import type { IProduct } from "@/types/api";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "@/components/helpers/Container";
import toast from "react-hot-toast";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    error,
    loading,
  } = useFetch<IProduct>(`/products/${id}`);

  const handleAddCard = () => {
    toast.success(`Product ${product?.title} added to card`);
  };

  if (loading) {
    return (
      <section>
        <Container>
          <div className="space-y-6">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="grid gap-6 md:grid-cols-2">
              <Skeleton className="aspect-square w-full" />
              <div className="space-y-4 flex flex-col justify-center">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-20 w-full" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (!product) {
    return (
      <section>
        <Container>
          <div className="space-y-6">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Card>
              <CardContent className="p-6 flex gap-8 flex-col items-center justify-center">
                <img
                  src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif"
                  alt="404"
                  style={{ borderRadius: "63% 37% 70% 30% / 30% 30% 70% 70%" }}
                />
                <p className="text-3xl font-medium">Product not found</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <section>
      <Container>
        <div className="space-y-6">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="space-y-6 flex flex-col justify-center">
              <div className="space-y-4">
                <Badge variant="secondary">{product.category}</Badge>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating.rate}</span>
                  </div>
                  <span className="text-muted-foreground">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <p className="text-3xl font-bold">${product.price}</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>

              <Button size="lg" className="w-full" onClick={handleAddCard}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Product;
