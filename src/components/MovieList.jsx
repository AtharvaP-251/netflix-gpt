import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

    if (!movies)
        return null;

    return (
        <div className="z-10">
            <h1 className="pb-3 mx-4 text-white text-xl">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;