import { useFetch } from "@/hooks/useFetch";
import type { IProduct } from "@/types/api";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const id = params.id;

  const { data, error, loading } = useFetch<IProduct>(`/products/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return <div>{data?.title}</div>;
};

export default Product;
