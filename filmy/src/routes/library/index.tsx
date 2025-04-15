import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/library/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged");
    const loggedIn = storedIsLogged === "true";
    setIsLogged(loggedIn);

    if (!loggedIn) {
      navigate({ to: "/account/login" });
    }
  }, [navigate]);

  return <div>Hello "/library/"!</div>;
}
