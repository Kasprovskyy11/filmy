import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/account/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [userNameState, setUserName] = useState("");
  const [passwordState, setPassword] = useState("");
  const [storedPass, setStoredPass] = useState("");
  const [storedUsername, setStoredUserName] = useState("");
  useEffect(() => {
    setStoredUserName(String(localStorage.getItem("UserName")));
    setStoredPass(String(localStorage.getItem("Password")));
    if (localStorage.getItem("isLogged") == "true") {
      navigate({ to: "/account" });
    }
  }, [isLogged]);

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function login() {
    if (userNameState == storedUsername && passwordState == storedPass) {
      console.log("zalogowano");
      localStorage.setItem("isLogged", "true");
      setIsLogged(true);
    } else {
      console.log("niezalogowano");
    }
  }

  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-center text-4xl uppercase font-bold mt-10">
          Login
        </h2>
        <div className="flex flex-col items-center w-96 h-96 border border-solid border-[black] rounded-xl mt-10 bg-[#FFFFF0]">
          <input
            type="text"
            placeholder="User Name"
            className="text-center w-52 mt-10 border-black border-solid border rounded-md"
            onChange={handleUserNameChange}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="text-center w-52 mt-10 border-black border-solid border rounded-md"
            onChange={handlePasswordChange}
          ></input>
          <Link to="/" className="mt-6 underline text-[royalblue]">
            Forgot your password?
          </Link>
          <Link
            to="/account/register"
            className="mt-6 underline text-[royalblue]"
          >
            I don't have an account
          </Link>
          <button
            className="mt-10 bg-[royalblue] px-10 py-2 rounded-md text-white"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
