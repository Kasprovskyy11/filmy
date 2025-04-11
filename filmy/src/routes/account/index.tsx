import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/account/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("hasAccount");
    setHasAccount(stored === "true");
  }, []);

  if (hasAccount) {
    navigate({ to: "/account/login" });
  } else {
    navigate({ to: "/account/register" });
  }
  return <></>;
}
