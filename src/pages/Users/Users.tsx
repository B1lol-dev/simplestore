import { useFetch } from "@/hooks/useFetch";
import type { IUser } from "@/types/api";
import Container from "@/components/helpers/Container";
import UsersSkeleton from "./components/skeleton/UsersSkeleton";
import UserCard from "./components/UserCard";

export default function Users() {
  const { data: users, loading } = useFetch<IUser[]>("/users");

  if (loading) {
    return <UsersSkeleton />;
  }

  return (
    <section>
      <Container>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Users</h1>
            <p className="text-muted-foreground">{users?.length} Users</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {users?.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
