import Container from "@/components/helpers/Container";
import UserCardSkeleton from "./UserCardSkeleton";

const UsersSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <section>
      <Container>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Users</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array(count)
              .fill("")
              .map((_, i) => (
                <UserCardSkeleton key={i} />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UsersSkeleton;
