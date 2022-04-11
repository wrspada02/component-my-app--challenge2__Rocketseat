
  import { Button } from "./Button";

  interface sideBarProps{
    genres: genreProps[],
    setSelectedGenreId: Function,
    selectedGenreId: number
  }

  interface genreProps{
    id: number,
    title: string,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  }

  export function SideBar(props: sideBarProps){

    function handleClickButton(id: number) {
      props.setSelectedGenreId(id);
    }

    return(
      <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
    );
  }