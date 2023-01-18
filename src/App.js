import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
import { useState } from 'react';

function App() {

  // how state is set and changed:
  // const [state, setState] = useState('defaultState')

  // ===== // ALL FILMS VARIABLE // ===== //
  const [films, setFilms] = useState(TMDB.films)
  
    // ===== // CURRENT MOVIE VARIABLE // ===== //
  const [current, setCurrent] = useState({
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

export default App