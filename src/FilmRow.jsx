import React, { Component } from 'react';
import Fave from "./Fave"
import Poster from './Poster'

export default class FilmRow extends Component {

  handleDetailsClick = film => {
    console.log('fetching details for film:', film.title)
  }

  render() {

    return (
        <div className="film-row" onClick={() => this.handleDetailsClick(this.props.movie)}>

        <Poster
            url={`https://image.tmdb.org/t/p/w780/${this.props.movie.poster_path}`} alt={this.props.movie.title}
        />

            <div className="film-summary">
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.release_date.substring(0, 4)}</p>
            </div>
                <Fave/>
        </div>

        
    );
  }
}