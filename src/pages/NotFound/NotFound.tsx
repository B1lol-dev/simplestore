import Container from "@/components/helpers/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <Container className="flex flex-col gap-4 items-center justify-center">
        <img
          src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif"
          alt="404"
          style={{
            borderRadius: "63% 37% 70% 30% / 30% 30% 70% 70%",
          }}
        />
        <h1 className="text-3xl font-medium">
          The page you are looking for is not found
        </h1>
        <Link to="/">
          <Button className="text-xl py-5 px-7">Go to home</Button>
        </Link>
      </Container>
    </section>
  );
};

export default NotFound;
