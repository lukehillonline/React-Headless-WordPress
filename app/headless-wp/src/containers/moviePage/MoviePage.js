import React from 'react';
import { withRouter } from "react-router-dom";
import { goBack } from '../../utils/helpers';

class MoviePage extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      imgUrl: ''
    }

    this.getMovieData = this.getMovieData.bind(this);
  }

  componentDidMount() {
    this.getMovieData(this.props.match.params.number);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imgUrl: this.props.location.state.meta.image
    });

    if(this.props.match.params.number !== nextProps.match.params.number) {
      this.getMovieData(nextProps.match.params.number);
    }
  }

  getMovieData(number) {
    let dataURL = 'http://localhost:8888/SBP/website/wp-json/wp/v2/movies/'+number+'?_embed';

    fetch(dataURL)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          movie: data
        })
      })
  }

  render() {

    let movie = this.state.movie;
    let image = this.state.imgUrl;

    if (Object.keys(movie).length === 0) { // check if movie object is empty
      return <article id="movie_page">
        <div className="masthead">
          <img src={image} alt={movie} style={{width: window.innerWidth}} />
        </div>
      </article>
    } 
    else {
      return <article id="movie_page">
        <div className="back" onClick={goBack.bind(this)}>Back</div>
        <div className="masthead">
          <img src={movie._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt={movie.title.rendered} style={{width: window.innerWidth}} />
        </div>
        <p><strong>Title:</strong> {movie.title.rendered}</p>
        <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
        <p><strong>Rating:</strong> {movie.acf.rating}</p>
        <div><strong>Description:</strong> <div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div>
      </article>
    }
  }
}

export default withRouter(MoviePage);