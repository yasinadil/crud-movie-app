import React from "react";
import MovieBox from "@/components/MovieBox";

async function getAllMovies() {
  const response = await fetch("http:localhost:3000/api/allMovies", {
    cache: "no-store",
  });
  const jsonData = await response.json();

  return jsonData.movies as object[];
}

export default async function Movie() {
  const movies = await getAllMovies();

  return (
    <div className="min-h-screen px-10 py-24">
      <h1 className="text-center font-bold text-3xl mb-10">ALL MOVIES</h1>

      <div className=" flex flex-wrap gap-5">
        {movies.map((movie: any, index) => {
          return <MovieBox key={index} name={movie.name} genre={movie.genre} />;
        })}
      </div>
    </div>
  );
}
