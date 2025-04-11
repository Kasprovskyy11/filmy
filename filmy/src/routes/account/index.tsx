import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/account/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [hasAccount, setHasAccount] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAccount = localStorage.getItem("hasAccount");
    const storedLogged = localStorage.getItem("isLogged");
    setHasAccount(storedAccount === "true");
    setIsLogged(storedLogged === "true");
  }, []);

  if (hasAccount && !isLogged) {
    navigate({ to: "/account/login" });
  } else if (!hasAccount) {
    navigate({ to: "/account/register" });
  } else if (hasAccount && isLogged) {
    navigate({ to: "/account" });
  }
  return <>{localStorage.getItem("UserName")}</>;
}
