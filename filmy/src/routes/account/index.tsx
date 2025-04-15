import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/account/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [hasAccount, setHasAccount] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const Subscriptions = ["1", "2"];
  const navigate = useNavigate();

  useEffect(() => {
    const storedAccount = localStorage.getItem("hasAccount");
    const storedLogged = localStorage.getItem("isLogged");
    setHasAccount(storedAccount === "true");
    setIsLogged(storedLogged === "true");
  }, []);

  function handleLogout() {
    localStorage.setItem("isLogged", "false");
    setIsLogged(false);
  }

  if (hasAccount && !isLogged) {
    navigate({ to: "/account/login" });
  } else if (!hasAccount) {
    navigate({ to: "/account/register" });
  } else if (hasAccount && isLogged) {
    navigate({ to: "/account" });
  }
  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl uppercase font-bold mt-10">Account Panel</h2>
        <div className="w-96 h-106 bg-[#B9FCD5] rounded-xl mt-10 flex flex-col items-center">
          <p className="mt-6">
            Your Username: {localStorage.getItem("UserName")}
          </p>
          <p className="mt-6">
            Subscriptions:{" "}
            {Subscriptions[0] == "" ? (
              <span>None</span>
            ) : (
              <span className="text-center">
                {Subscriptions.map((sub) => (
                  <p>{sub}</p>
                ))}
              </span>
            )}
          </p>

          <button
            className="mt-10 bg-[royalblue] px-10 py-2 rounded-md text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
