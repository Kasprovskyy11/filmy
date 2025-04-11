import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/account/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    const userName = localStorage.getItem("UserName");
    const pass = localStorage.getItem("Password");
  }, []);
  return <div>Hello "/account/login/"!</div>;
}
