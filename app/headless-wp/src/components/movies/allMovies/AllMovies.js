import React from 'react';
import { withRouter } from "react-router-dom";
import { goToMovie } from '../../../utils/helpers';

import MovieTitle from '../movieTitle/MovieTitle';
import MovieThumbnail from '../movieThumbnail/MovieThumbnail';

class AllMovies extends React.Component {

  render() {
    let allMovies = this.props.movieData.map((movie, index) => {
      return <article className='movie-tout' key={index} onClick={goToMovie.bind(this)} id={movie.id} image={movie._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} >
          <MovieThumbnail imageUrl={movie._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} imageTitle={movie._embedded['wp:featuredmedia'][0].title.rendered} />
          <MovieTitle title={movie.title.rendered} />
      </article>
    });

    return <div>{allMovies}</div>
  }
}

export default withRouter(AllMovies);