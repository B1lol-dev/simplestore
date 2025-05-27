import { useFetch } from "@/hooks/useFetch";
import type { IUser } from "@/types/api";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { data, error, loading } = useFetch<IUser>(`/users/${params.id}`);

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return <div>{data?.username}</div>;
};

export default User;
