import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/account/register/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [hasAccount, setHasAccount] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLogged", "false");
    const stored = localStorage.getItem("hasAccount");
    setHasAccount(stored === "true");
  }, []);

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function createAccount() {
    if (userName && password) {
      localStorage.setItem("UserName", userName);
      localStorage.setItem("Password", password);
      localStorage.setItem("hasAccount", "true");
      setHasAccount(true);
    }
  }

  if (hasAccount) {
    navigate({ to: "/account/login" });
  }
  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-center text-4xl uppercase font-bold mt-10">
          Register
        </h2>
        <div className="flex flex-col items-center w-96 h-96 border border-solid border-[black] rounded-xl mt-10 bg-[white]">
          <input
            type="text"
            placeholder="User Name"
            className="text-center w-52 mt-10 border-black border-solid border rounded-md"
            onChange={handleUserNameChange}
            value={userName}
            required
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="text-center w-52 mt-10 border-black border-solid border rounded-md"
            onChange={handlePasswordChange}
            value={password}
            required
          ></input>
          <button
            className="mt-10 bg-[royalblue] px-10 py-2 rounded-md text-white"
            onClick={createAccount}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
