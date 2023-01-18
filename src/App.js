import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
import { useState } from 'react';

export default function App() {

  const [films, setFilms] = useState(TMDB.films)
  let [current, setCurrent] = useState({
    id: '',
    title: '',
    poster_path: '',
    backdrop_path: '',
    overview: '',
    release_date: '',
  })

  const handleDetailsClick = film => {
    console.log('fetching details for film:', film.title)
    current = film
  }

    return (
      <div className="film-library">
        <FilmList 
        films={films}
        handleDetailsClick={handleDetailsClick}
        />
        <Details film={current}/>
      </div>
    );
}