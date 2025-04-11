import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
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
          <Link
            to="/account"
            className="[&.active]:font-bold hover:scale-120 transform transition-transform"
          >
            Your Account
          </Link>
        </div>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
