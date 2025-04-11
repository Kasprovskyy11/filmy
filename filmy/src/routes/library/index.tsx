import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/library/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged");
    if (!storedIsLogged) {
      navigate({ to: "/account/login" });
    }
  }, []);

  return <div>Hello "/library/"!</div>;
}
