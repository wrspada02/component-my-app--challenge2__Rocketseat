  
  import { MovieCard } from "./MovieCard";

  interface movieCardProps{
    selectedGenre:{
      title: string
    },
    movies: moviesProps[]
  }

  interface moviesProps{
    imdbID: string,
    Title: string,
    Poster: string,
    Runtime: string,
    Ratings: [{
      Value: string
    }]
  }

  export function Content(props: movieCardProps){

    return(
      <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard 
            key={movie.imdbID} 
            title={movie.Title} 
            poster={movie.Poster} 
            runtime={movie.Runtime} 
            rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
    );
  }