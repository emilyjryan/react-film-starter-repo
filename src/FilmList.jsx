import FilmRow from './FilmRow';

function Filmlist() {

  const [faves, setFaves] = useState([])

    state = {
        filter: "all"
    }

    handleFilterClick = filter => {
        console.log('filter was clicked', filter)
        this.setState ({ filter })
    }

    const allFilms = this.props.films.map((film, i) => {
        return (
            <FilmRow 
            movie={film} 
            key={`film-${i}`}
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
                <span className="section-count">0</span>
              </div>
          </div>
          
          {allFilms}
        </div>
      )
}