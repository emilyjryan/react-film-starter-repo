import FilmRow from './FilmRow';
import { useState } from 'react';

function FilmList() {

  const [faves, setFaves] = useState([])

    state = {
        filter: "all"
    }

    handleFilterClick = filter => {
        console.log('filter was clicked', filter)
        this.setState ({ filter })
    }

    const handleFaveToggle = film => {
      let newFaves = [...faves];
      const filmIndex = newFaves.indexOf(film)
      if (filmIndex < 0) {
        // add to faves
        console.log(`Adding ${film.title} to faves`)
        newFaves = [...newFaves, film];
      } else {
        // remove from faves
        console.log(`Removing ${film.title} from faves`)
        newFaves.splice(filmIndex, 1)
      }
      setFaves(newFaves)
    }

    const allFilms = this.props.films.map((film, i) => {
        return (
            <FilmRow 
            film={film} 
            key={`film-${i}`}
            onFaveToggle={handleFaveToggle}
            handleDetailsClick={ () => {props.handleDetailsClick(props.film)}}
            isFave={faves.includes(film)}
            />
        )
    })

    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
              <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => {this.handleFilterClick("all")}}>
                ALL
                <span className="section-count">{this.props.films.length}</span>
              </div>
              <div className={`film-list-filter ${this.state.filter === 'fave' ? 'is-active' : ''}`} onClick={()=>{
                this.handleFilterClick("faves")
              }}>
                FAVES
                <span className="section-count">{faves.length}</span>
              </div>
          </div>
          
          {allFilms}
        </div>
      )
}

export default FilmList