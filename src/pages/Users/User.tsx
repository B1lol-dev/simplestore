import Container from "@/components/helpers/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetch } from "@/hooks/useFetch";
import type { IUser } from "@/types/api";
import { ArrowLeft, Globe, Phone } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: user, error, loading } = useFetch<IUser>(`/users/${params.id}`);

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (loading) {
    return (
      <section>
        <Container>
          <div className="space-y-6">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Users
            </Button>

            <div className="flex justify-center py-30">
              <div className="space-y-6">
                <Card className="flex flex-row justify-center items-center gap-20 max-w-[1200px] px-40 py-20 max-lg:flex-col">
                  <div className="w-[250px] flex flex-col gap-2">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <div className="w-[250px] flex flex-col gap-2">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (!user) {
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
                <p className="text-3xl font-medium">User not found</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    );
  }
  return (
    <section>
      <Container>
        <div className="space-y-6">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Users
          </Button>

          <div className="flex justify-center py-30">
            <div className="space-y-6">
              <Card className="flex flex-row justify-center items-center gap-20 max-w-[1200px] px-40 py-20 max-lg:flex-col">
                <div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {user.name.firstname} {user.name.lastname}
                      </h2>
                      <p className="text-muted-foreground">@{user.username}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{user.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
                <div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Address Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="font-medium">Street Address</p>
                      <p className="text-muted-foreground">
                        {user.address.number} {user.address.street}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">City & Zip Code</p>
                      <p className="text-muted-foreground">
                        {user.address.city}, {user.address.zipcode}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Coordinates</p>
                      <p className="text-muted-foreground">
                        Lat: {user.address.geolocation.lat}, Long:{" "}
                        {user.address.geolocation.long}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default User;
