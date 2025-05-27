import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IUser } from "@/types/api";
import { Globe, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const UserCard = ({ user }: { user: IUser }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>
            {user.name.firstname} {user.name.lastname}
          </span>
          <span className="text-sm font-normal text-muted-foreground">
            @{user.username}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Globe className="h-4 w-4" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{user.address.city}</span>
        </div>
        <Button asChild className="w-full mt-4">
          <Link to={`/users/${user.id}`}>View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
