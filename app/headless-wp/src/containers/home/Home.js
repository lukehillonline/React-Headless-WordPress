import React from 'react';

import AllMovies from '../../components/movies/allMovies/AllMovies';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    let dataURL = "http://localhost:8888/SBP/website/wp-json/wp/v2/movies?_embed";
  
    fetch(dataURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response
        })
      })
  }

  render() {
  	let movieData = this.state.movies;

	return (
	    <div>	  
	    	<h1>Home Page</h1>

			  <AllMovies movieData={movieData} />
	  	</div>
	)
  }
}

export default HomePage;