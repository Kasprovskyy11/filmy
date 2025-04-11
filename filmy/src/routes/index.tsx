import { createFileRoute } from "@tanstack/react-router";
import "../index.css";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    if (localStorage.getItem("hasAccount") === null) {
      localStorage.setItem("hasAccount", "false");
    }
  }, []);

  return (
    <div className="container mx-auto mt-20">
      <img src="banner1.jpg" className=" rounded-4xl"></img>
    </div>
  );
}
