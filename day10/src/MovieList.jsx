import "./MovieList.css";
import movies from "./movies";

export const MovieList = () => {
  return (
    <div className="movie-list">
    {movies.map((movie)=>(
        <div key={movie.id} className="movie-card">
            <img src={movie.image}/>
            <h1>{movie.title}</h1>
        </div>
    ))}
    </div>
  );;
};