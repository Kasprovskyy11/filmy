import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import FilmCard from "../../components/filmcard";

export const Route = createFileRoute("/library/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  const [data, setData] = useState<any[]>([]);
  const API_KEY = "df4c47e3";
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=movie`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True" && data.Search) {
          setData(data.Search);
        } else {
          console.error("Brak wyników lub błąd z API:", data.Error);
        }
      })
      .catch((err) => {
        console.error("Błąd fetcha:", err);
      });
  }, []);
  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged");
    const loggedIn = storedIsLogged === "true";
    setIsLogged(loggedIn);

    if (!loggedIn) {
      navigate({ to: "/account/login" });
    }
  }, [navigate]);

  console.log(data);

  return (
    <>
      <div>
        <h2>Films Library</h2>
        <div className="container mx-auto grid grid-cols-3 grid-flow-row max-w-screen-lg">
          {data.map((film) => (
            <FilmCard
              key={film.imdbID}
              title={film.Title}
              posterId={film.Poster}
            />
          ))}
        </div>
      </div>
    </>
  );
}
