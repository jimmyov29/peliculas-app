export function MovieCard({movie}){
    // endpoint para las imagenes
    const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;
    return(
        <li>
            <img width={230}
            height={345}
            src={imageUrl}
            alt ={movie.title}
            />
            <div>
                {movie.title}
            </div>
        </li>
    
        );
}
export default MovieCard;