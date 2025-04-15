import {
  createRootRoute,
  Link,
  Outlet,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: () => {
    const navigate = useNavigate();
    const [isLogged, setLogged] = useState(false);
    useEffect(() => {
      const stored = localStorage.getItem("isLogged");
      if (stored == "true") {
        setLogged(stored === "true");
      }
    }, [localStorage.getItem("isLogged")]);

    return (
      <>
        <div className="p-2 flex gap-2 text-white bg-[black]">
          <div className="w-[50%]">
            <h1 className="text-4xl font-bold m-4 bg-gradient-to-br from-blue-300 to-indigo-800 bg-clip-text text-transparent">
              <Link to="/">
                Films<span className="text-[white]">App</span>
              </Link>
            </h1>
          </div>
          <div className="w-[50%] flex justify-evenly items-center text-xl transition transition-scale duration-100">
            <Link
              to="/"
              className="[&.active]:font-bold hover:scale-120 transform transition-transform"
            >
              Home
            </Link>{" "}
            <Link
              to="/library"
              className="[&.active]:font-bold hover:scale-120 transform transition-transform"
            >
              Library
            </Link>
            {isLogged ? (
              <Link
                to="/account"
                className="[&.active]:font-bold hover:scale-120 transform transition-transform"
              >
                Your Account
              </Link>
            ) : (
              <Link
                to="/account/login"
                className="[&.active]:font-bold hover:scale-120 transform transition-transform"
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});
